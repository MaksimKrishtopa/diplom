import {IAdminProps} from "@/entities/type.ts";


function generateAdmins(count: number): IAdminProps[] {
    const admins: IAdminProps[] = [];

    for (let i = 0; i < count; i++) {
        admins.push({
            id: window.crypto.randomUUID(),
            email: 'admin@example.com',
            password: '123123',
        });
    }

    return admins;
}

export async function fetchAdmin(): Promise<IAdminProps[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const fakeAdmins = generateAdmins(5);
            resolve(fakeAdmins);
        }, 1000);
    });
}