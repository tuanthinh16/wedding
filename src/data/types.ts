// Types for wedding invitation data

export interface Couple {
    bride: {
        name: string;
        fullName: string;
        fatherName: string;
        motherName: string;
        avatar?: string;
    };
    groom: {
        name: string;
        fullName: string;
        fatherName: string;
        motherName: string;
        avatar?: string;
    };
}

export interface EventInfo {
    type: 'ceremony' | 'reception';
    title: string;
    date: string;
    time: string;
    venue: {
        name: string;
        address: string;
        phone?: string;
        mapUrl?: string;
    };
}

export interface WeddingInfo {
    weddingDate: string;
    events: EventInfo[];
    story?: string;
    hashtag?: string;
}

export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    caption?: string;
}

export interface ContactInfo {
    name: string;
    role: string;
    phone: string;
    relationship: string;
}

export interface WeddingData {
    couple: Couple;
    weddingInfo: WeddingInfo;
    gallery: GalleryImage[];
    contacts: ContactInfo[];
    rsvp: {
        enabled: boolean;
        deadline?: string;
        message?: string;
    };
}
