import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Coment from './Coment'

export default class Moment extends BaseModel {
  @hasMany(() => Coment)
  public coments: HasMany<typeof Coment>

  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String

  @column()
  public description: String

  @column()
  public image: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
