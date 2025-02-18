import {IAdminProps} from "@/features/admin-registration/model/type.ts";


function generationUuid(min: number, max: number): number {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}


export async function fetchAdmin(email: string, password: string): Promise<IAdminProps[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const fakeAdmins: IAdminProps[] = [
                {id: generationUuid(1, 100), email: "admin@example.com", password: "admin123"},
                {id: generationUuid(1, 100), email: "superadmin@example.com", password: "superadmin123"},
            ];
            resolve(fakeAdmins);
        }, 2000);
    });
}
