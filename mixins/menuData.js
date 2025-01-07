export default {
    data() {
        return {
            menuData: [
                {
                    id: 1,
                    hasDropdown: false,
                    title: "หน้าหลัก",
                    link: "/",
                },
                {
                    id: 2,
                    title: "หลักสูตร",
                    //   megaMenu: true,
                    hasDropdown: true,
                    link: "#",
                    submenus: [
                        {
                            title: "เทคโนโลยีบัณฑิต เทคโนโลยียานยนต์สมัยใหม่และระบบอัตโนมัติ (MATA)",
                            link: "/course/1",
                        },
                    ],
                },
                {
                    id: 3,
                    hasDropdown: true,
                    title: "CWIE",
                    link: "#",
                    submenus: [
                        { title: "ประวัติความเป็นมา CWIE", link: "/cwie/1" },
                        {
                            title: "ข้อบังคับ ประกาศ ระเบียบ CWIE",
                            link: "/cwie/2",
                        },
                        { title: "ระบบสารสนเทศ CWIE", link: "/cwie/3" },
                        { title: "คู่มือ CWIE", link: "/cwie/4" },
                        { title: "เอกสารดาวน์โหลด", link: "/cwie/5" },
                        { title: "ประโยชน์ของ CWIE", link: "/cwie/6" },
                        { title: "รางวัล CWIE ดีเด่น", link: "/cwie/7" },
                        { title: "ปฏิทิน CWIE มจพ.", link: "/cwie/8" },
                        {
                            title: "เครือข่าย CWIE ภาคกลางตอนบน",
                            link: "/cwie/9",
                        },
                        {
                            title: "ประกวดผลงาน CWIE",
                            link: "https://technopark.kmutnb.ac.th/coopday/",
                        },
                    ],
                },
                {
                    id: 4,
                    hasDropdown: true,
                    title: "งานบริการวิชาการ",
                    link: "#",
                    submenus: [
                        {
                            title: "หน่วยงาน",
                            link: "/department",
                        },
                        {
                            title: "งานบริการวิชาการทั้งหมด",
                            link: "/serve",
                        },
                    ],
                },
                {
                    id: 4,
                    hasDropdown: true,
                    title: "งานทรัพย์สินทางปัญญา",
                    link: "#",
                    submenus: [
                        {
                            title: "งานทรัพย์สินทางปัญญา",
                            link: "/intellectual/1",
                        },
                        {
                            title: "KMUTNB MOOC",
                            link: "/intellectual/3",
                        },
                        {
                            title: "เอกสารดาวน์โหลด",
                            link: "/intellectual/2",
                        },
                    ],
                },
                {
                    id: 5,
                    title: "เกี่ยวกับเรา",
                    hasDropdown: true,
                    //   megaMenu: true,
                    link: "#",
                    //   pages: true,
                    submenus: [
                        { title: "ความเป็นมา", link: "/about/1" },
                        { title: "วิสัยทัศน์/พันธกิจ", link: "/about/2" },
                        { title: "สัญลักษณ์", link: "/about/3" },
                        { title: "โครงสร้างองค์กร", link: "/about/4" },
                        { title: "โครงสร้างบริหาร", link: "/about/5" },
                        { title: "บุคลากร", link: "/team" },
                        { title: "แบบฟอร์มสำหรับบุคลากร", link: "/about/6" },
                        { title: "ระบบสารสนเทศภายใน", link: "/about/7" },
                    ],
                },
                {
                    id: 6,
                    hasDropdown: false,
                    title: "ติดต่อสอบถาม",
                    link: "/contact-us",
                },
            ],
        };
    },
};
