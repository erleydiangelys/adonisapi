/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { INSTRUÇÂO: 'Vá para /api' }
})

Route.group(() => {
  Route.get('/', async () => {
    return {
      ForkPostman:
        'https://god.gw.postman.com/run-collection/24333774-17994e86-917a-4a7f-919f-9429edd09bd1?action=collection%2Ffork&collection-url=entityId%3D24333774-17994e86-917a-4a7f-919f-9429edd09bd1%26entityType%3Dcollection%26workspaceId%3D0af7a6d0-987c-43b2-8179-53b9f00d99ac',
    }
  })
  Route.resource('/moments', 'MomentsController').apiOnly()
  Route.post('/moments/:momentId/coments', 'ComentsController.store')
}).prefix('/api')
