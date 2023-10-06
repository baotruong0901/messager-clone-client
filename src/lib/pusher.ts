import PusherClient from 'pusher-js'

export const pusherClient = new PusherClient(
    process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
    channelAuthorization: {
        endpoint: '/api/pusher/auth',
        transport: 'ajax'
    },
    cluster: "ap1"
})