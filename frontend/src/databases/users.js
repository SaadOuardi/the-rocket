import Profile1 from '../assets/images/profile/cristiano-ronaldo.jpg';
import Profile2 from '../assets/images/profile/ElonMusk.webp';
import Profile3 from '../assets/images/profile/mark-zuckerberg.jpg';
import Cover1 from '../assets/images/cover/cristiano-ronaldo.jpg';
import Cover2 from '../assets/images/cover/spacex.jpg';
import Cover3 from '../assets/images/cover/mark-zuckerberg.webp';

export const users = [
    {
        user_id: 1,
        first_name: "Cristiano",
        last_name: "Ronaldo",
        username: "CR7",
        email: "ronaldo@football.com",
        password: "hashed_password1",
        profile_picture: Profile1,
        cover_picture: Cover1,
        bio: "Football legend, family man, and champion.",
        created_at: "2024-01-01T12:00:00Z"
    },
    {
        user_id: 2,
        first_name: "Elon",
        last_name: "Musk",
        username: "eMusk",
        email: "elon@tesla.com",
        password: "hashed_password2",
        profile_picture: Profile2,
        cover_picture: Cover2,
        bio: "Space enthusiast, Tesla and X CEO.",
        created_at: "2024-02-01T08:30:00Z"
    },
    {
        user_id: 3,
        first_name: "Mark",
        last_name: "Zuckerberg",
        username: "Zuck",
        email: "mark@meta.com",
        password: "hashed_password3",
        profile_picture: Profile3,
        cover_picture: Cover3,
        bio: "Building the Metaverse.",
        created_at: "2024-02-15T10:45:00Z"
    },
];
