import { Request } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Moment'
import Coment from './../../Models/Coment'

export default class ComentsController {
  public async store({ request, params, response }: HttpContextContract) {
    const body = request.body()
    const momentId = params.momentId

    await Moment.findOrFail(momentId)

    body.momentId = momentId

    const coment = await Coment.create(body)

    response.status(201)

    return {
      message: 'Comentario adicionado com sucesso',
      data: coment,
    }
  }
}
