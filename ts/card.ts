export interface CardData {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: {
        city: string;
    };
    imageUrl: string;
    title: string;
    aboutMe: string;
}