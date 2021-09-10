import { rest } from 'msw';

export const handlers = [
    rest.post('/api/auth/login', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                status: 200,
                message: 'Successfully logged in',
                user: 'mgiacomo'
            })
        )
    }),

    rest.post('/api/auth/logout', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                status: 200,
                message: 'Successfully logged out'
            })
        )
    }),
]
