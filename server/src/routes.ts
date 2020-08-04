import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

//definir formato do objeto
interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    //transaction
    const trx = await db.transaction();

    try{
        //registro de usuário
        const insertedUsersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio
        });

        //id inserido
        const user_id = insertedUsersIds[0];

        //inserir aulas
        const insertedClassesIds = await trx('classes').insert({
            subject,
            cost,
            user_id,
        });

        //id inserido da aula
        const class_id = insertedClassesIds[0];

        //percorrer e formatar objetos
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to),
            };
        })

        //inserir na tabela
        await trx('class_schedule').insert(classSchedule);

        //finalmente fazer alterações
        await trx.commit();

        return response.status(201).send();

    } catch (err) {
        //desfazer error no banco se tiver
        await trx.rollback();

        return response.status(400).json({
            error: 'Unexpected error while creating new class'
        })
    }
});

export default routes;