export interface ICreatePostForm {
    image: File | null;
    text?: string;
    location?: string;
    theme_ids?: number[];
}