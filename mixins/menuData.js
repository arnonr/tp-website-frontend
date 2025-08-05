export default {
    data() {
        return {
            menuData: [
                {
                    id: 1,
                    hasDropdown: false,
                    title: "Home",
                    link: "/",
                },
                {
                    id: 2,
                    title: "Programs",
                    //   megaMenu: true,
                    hasDropdown: true,
                    submenus: [
                        {
                            title: "Modern Automotive Technology and Automation System (Thai Program)",
                            link: "/course/1",
                        },
                        {
                            title: "Modern Automotive Technology and Automation System (English Program)",
                            link: "https://technopark.kmutnb.ac.th/mata-en",
                        },
                        {
                            title: "Scholarships",
                            link: "/scholarship",
                        },
                    ],
                },
                {
                    id: 3,
                    hasDropdown: true,
                    title: "CWIE",
                    submenus: [
                        { title: "History of CWIE", link: "/cwie/1" },
                        {
                            title: "CWIE Regulations and Announcements",
                            link: "/cwie/2",
                        },
                        { title: "CWIE Information System", link: "/cwie/3" },
                        { title: "CWIE Manual", link: "/cwie/4" },
                        { title: "Downloadable Documents", link: "/cwie/5" },
                        { title: "Benefits of CWIE", link: "/cwie/6" },
                        { title: "CWIE Outstanding Awards", link: "/cwie/7" },
                        { title: "CWIE Calendar (KMUTNB)", link: "/cwie/8" },
                        {
                            title: "Upper Central Region CWIE Network",
                            link: "/cwie/9",
                        },
                        {
                            title: "CWIE Project Contest",
                            link: "https://cwieday.technopark.kmutnb.ac.th",
                        },
                        {
                            // ประชาสัมพันธ์ตำแหน่งงาน
                            title: "Job Announcement",
                            link: "/cwie/10",
                        },
                    ],
                },
                {
                    id: 4,
                    hasDropdown: true,
                    title: "AcademicServices",
                    submenus: [
                        {
                            title: "Departments",
                            link: "/department",
                        },
                        {
                            title: "Training Courses",
                            link: "http://skillhub.technopark.kmutnb.ac.th/home",
                        },
                        {
                            title: "All Academic Services",
                            link: "/serve",
                        },
                        {
                            title: "Downloadable Documents",
                            link: "/about/91",
                        },
                    ],
                },
                {
                    id: 4,
                    hasDropdown: true,
                    title: "IntellectualProperty",
                    submenus: [
                        {
                            title: "Intellectual Property",
                            link: "/intellectual/1",
                        },
                        {
                            title: "KMUTNB MOOC",
                            link: "/intellectual/3",
                        },
                        {
                            title: "Downloadable Documents",
                            link: "/intellectual/2",
                        },
                    ],
                },
                {
                    id: 5,
                    title: "AboutUs",
                    hasDropdown: true,
                    //   megaMenu: true,
                    //   pages: true,
                    submenus: [
                        { title: "About Us", link: "/about/1" },
                        { title: "Vision / Mission", link: "/about/2" },
                        { title: "Symbol", link: "/about/3" },
                        { title: "Organization Structure", link: "/about/4" },
                        { title: "Management Structure", link: "/about/5" },
                        { title: "Staff", link: "/team" },
                        { title: "Form for Staff", link: "/about/6" },
                        { title: "Internal Information System", link: "/about/7" },
                    ],
                },
                {
                    id: 6,
                    hasDropdown: false,
                    title: "ContactUs",
                    link: "/contact-us",
                },
            ],
        };
    },
};
