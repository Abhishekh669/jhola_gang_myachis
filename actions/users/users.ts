"use server"

import { auth } from "@/auth"

export const get_logged_user = async() =>{
    const session = await auth();
    if(!session?.user) return null;
    return session;
}