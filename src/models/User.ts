interface Avatar {
    gravatar: { hash: string }
}

export interface User {
    avatar: Avatar;
    name: string;
    username: string;
    include_adult: boolean;
}