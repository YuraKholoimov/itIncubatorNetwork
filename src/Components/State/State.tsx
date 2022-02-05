export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

const state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hello everyone!!!', likesCount: 12},
            {id: 2, post: 'Hello everyone!!!', likesCount: 12},
            {id: 3, post: 'Hello everyone!!!', likesCount: 12},
            {id: 4, post: 'Hello everyone!!!', likesCount: 12},
        ]
    },
    dialogsPage: {
        dialog: [
            {id: 1, name: 'Name'},
            {id: 2, name: 'Name'},
            {id: 3, name: 'Name'},
            {id: 4, name: 'Name'}
        ]
    }


}