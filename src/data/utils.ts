// Utility functions for wedding data

import { EventInfo } from './types';

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const formatTime = (timeString: string): string => {
    return timeString;
};

export const getEventTypeLabel = (type: EventInfo['type']): string => {
    const labels = {
        ceremony: 'Lễ Vu Quy',
        reception: 'Tiệc Cưới'
    };
    return labels[type];
};

export const getDaysUntilWedding = (weddingDate: string): number => {
    const today = new Date();
    const wedding = new Date(weddingDate);
    const diffTime = wedding.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

export const generateMapUrl = (address: string): string => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};

export const formatPhoneNumber = (phone: string): string => {
    // Format Vietnamese phone numbers
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
    }
    return phone;
};

export const validateRSVP = (data: { name: string; guests: number; message?: string }): boolean => {
    return data.name.trim() !== '' && data.guests > 0 && data.guests <= 10;
};

export const generateShareText = (coupleNames: string, weddingDate: string, hashtag?: string): string => {
    const text = `Tham dự đám cưới của ${coupleNames} vào ngày ${formatDate(weddingDate)}`;
    return hashtag ? `${text} ${hashtag}` : text;
};
