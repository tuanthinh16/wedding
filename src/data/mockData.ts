import { WeddingData } from './types';

export const weddingData: WeddingData = {
    couple: {
        bride: {
            name: "Gia Hân",
            fullName: "Trịnh Gia Hân",
            fatherName: "Father's Name",
            motherName: "Mother's Name",
            avatar: "/images/bride.jpg"
        },
        groom: {
            name: "Tuấn Thịnh",
            fullName: "Đỗ Tuấn Thịnh",
            fatherName: "Father's Name",
            motherName: "Mother's Name",
            avatar: "/images/groom.jpg"
        }
    },

    weddingInfo: {
        weddingDate: "2025-12-15",
        story: "Chúng tôi gặp nhau trong một buổi chiều mùa thu tại trường đại học. Từ những cuộc trò chuyện đầu tiên, chúng tôi đã cảm nhận được sự đồng điệu đặc biệt. Sau 5 năm yêu nhau, chúng tôi quyết định bước vào hôn nhân với sự chúc phước của gia đình và bạn bè.",
        hashtag: "#ThinhHanWedding2025",
        events: [
            {
                type: "ceremony",
                title: "Lễ Vu Quy",
                date: "15/12/2025",
                time: "09:00",
                venue: {
                    name: "Nhà Hàng Tiệc Cưới Palace",
                    address: "123 Đường Nguyễn Huệ, Quận 1, TP.HCM",
                    phone: "028 3822 1234",
                    mapUrl: "https://maps.google.com/?q=Palace+Wedding+HCMC"
                }
            },
            {
                type: "reception",
                title: "Tiệc Cưới",
                date: "15/12/2025",
                time: "18:00",
                venue: {
                    name: "Nhà Hàng Tiệc Cưới Palace",
                    address: "123 Đường Nguyễn Huệ, Quận 1, TP.HCM",
                    phone: "028 3822 1234",
                    mapUrl: "https://maps.google.com/?q=Palace+Wedding+HCMC"
                }
            }
        ]
    },

    gallery: [
        {
            id: "1",
            src: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg",
            alt: "Ảnh cưới 1",
            caption: "Buổi chụp ảnh cưới tại biển"
        },
        {
            id: "2",
            src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
            alt: "Ảnh cưới 2",
            caption: "Khoảnh khắc ngọt ngào"
        },
        {
            id: "3",
            src: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
            alt: "Ảnh cưới 3",
            caption: "Trong vườn hoa"
        },
        {
            id: "4",
            src: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
            alt: "Ảnh cưới 4",
            caption: "Sunset moment"
        },
        {
            id: "5",
            src: "https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg",
            alt: "Ảnh cưới 5",
            caption: "Tại studio"
        },
        {
            id: "6",
            src: "https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg",
            alt: "Ảnh cưới 6",
            caption: "Ảnh đôi đẹp"
        }
    ],

    contacts: [
        {
            name: "Đỗ Tuấn Thịnh",
            role: "Chú rể",
            phone: "0901 234 567",
            relationship: "Chú rể"
        },
        {
            name: "Trịnh Gia Hân",
            role: "Cô dâu",
            phone: "0907 345 678",
            relationship: "Cô dâu"
        },
        // {
        //     name: "Lê Văn Nam",
        //     role: "Bố chú rể",
        //     phone: "0912 456 789",
        //     relationship: "Phụ huynh"
        // },
        // {
        //     name: "Trần Thị Lan",
        //     role: "Mẹ cô dâu",
        //     phone: "0918 567 890",
        //     relationship: "Phụ huynh"
        // }
    ],

    rsvp: {
        enabled: true,
        deadline: "10/12/2025",
        message: "Kính mong quý khách xác nhận tham dự để chúng tôi chuẩn bị chu đáo nhất!"
    }
};
