<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12" v-if="item != null">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <!-- <h4 class="breadcrumb__title">
                  {{ item.title }}
                </h4> -->

                        <div class="breadcrumb__list">
                            <span>
                                <NuxtLink
                                    :to="{
                                        path: '/',
                                    }"
                                >
                                    หน้าหลัก
                                </NuxtLink>
                            </span>
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> {{ item.title }} </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  -->
    <section class="postbox__area pt-40 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="postbox__wrapper" v-if="item">
                        <!-- Content -->
                        <div class="postbox__main">
                            <div class="row">
                                <div
                                    class="col-sm-12 col-md-12 col-12"
                                    style="border-left: 0.7em solid #f60"
                                >
                                    <h2>{{ item.title }}</h2>
                                    <h2 style="color: #f60">
                                        <span>อุทยานเทคโนโลยี มจพ.</span>
                                    </h2>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="postbox__main-wrapper">
                                        <div
                                            class="postbox__details-content-wrapper mt-40"
                                        >
                                            <img
                                                src="/images/scholarship/banner.jpg"
                                                alt=""
                                                class="img-fluid"
                                            />

                                            <div class="card mt-40">
                                                <div class="card-body">
                                                    <ul
                                                        class="nav nav-pills mb-3"
                                                        id="pills-tab"
                                                        role="tablist"
                                                    >
                                                        <li
                                                            class="nav-item"
                                                            role="presentation"
                                                        >
                                                            <button
                                                                class="nav-link active"
                                                                id="pills-home-tab"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#pills-home"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="pills-home"
                                                                aria-selected="true"
                                                            >
                                                                พิธีมอบทุน
                                                            </button>
                                                        </li>
                                                        <li
                                                            class="nav-item"
                                                            role="presentation"
                                                        >
                                                            <button
                                                                class="nav-link"
                                                                id="pills-projects-tab"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#pills-projects"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="pills-projects"
                                                                aria-selected="false"
                                                            >
                                                                โครงการที่ได้รับทุนสนับสนุน
                                                            </button>
                                                        </li>
                                                        <li
                                                            class="nav-item"
                                                            role="presentation"
                                                        >
                                                            <button
                                                                class="nav-link"
                                                                id="pills-details-tab"
                                                                data-bs-toggle="pill"
                                                                data-bs-target="#pills-details"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="pills-details"
                                                                aria-selected="false"
                                                            >
                                                                รายละเอียดโครงการ
                                                            </button>
                                                        </li>
                                                    </ul>
                                                    <div
                                                        class="tab-content"
                                                        id="pills-tabContent"
                                                    >
                                                        <div
                                                            class="tab-pane fade show active"
                                                            id="pills-home"
                                                            role="tabpanel"
                                                            aria-labelledby="pills-home-tab"
                                                        >
                                                            <h3
                                                                class="text-center mt-40 mb-40"
                                                                style="
                                                                    color: #ff6600;
                                                                "
                                                            >
                                                                ขอแสดงความยินดีกับทั้ง
                                                                12 ทีม
                                                            </h3>
                                                            <img
                                                                src="/images/scholarship/img2.jpg"
                                                                alt=""
                                                                class="img-fluid rounded-4 w-75 d-block mx-auto mb-40"
                                                            />

                                                            <ul
                                                                class="list-group"
                                                            >
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >1.
                                                                        การประมาณโครงสร้างด้วยทอพอโลยี</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >2.
                                                                        Smart
                                                                        Sigh
                                                                        Glove”
                                                                        Innovative
                                                                        Glove
                                                                        for
                                                                        Real-time
                                                                        Sign
                                                                        Language
                                                                        Translation</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >3.
                                                                        Safety
                                                                        issues
                                                                        of the
                                                                        seatbelt
                                                                        extender
                                                                        devices,
                                                                        according
                                                                        to TIS
                                                                        and UN
                                                                        Regulation
                                                                    </strong>
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >4.
                                                                        Sustainable
                                                                        Living
                                                                        Solutions
                                                                        Advancing
                                                                        EV
                                                                        Infrastructure,
                                                                        Local
                                                                        Product
                                                                        Accessibility,
                                                                        and
                                                                        Digital
                                                                        Connectivity</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >5.
                                                                        รถไฟฟ้าขับเคลื่อนด้วยระบบอัตโนมัติสำหรับขนส่งของในโรงพยาบาล</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >6.
                                                                        การพัฒนาระบบจัดการความร้อนแบเตอรี่บนพื้นฐานของระบบอัดไอแบบเครื่องระเหยคู่โดยใช้อีเจคเตอร์เป็นอุปกรณ์ลดความดันเพื่อการประหยัดพลังงานและความปลอดภัยในยานยนต์ไฟฟ้า</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >7.
                                                                        การเคลือบพื้นผิวชิ้นงานเทอร์โมพลาสติกสตาร์ชด้วยพลาสติกที่ย่อยสลายได้ทางชีวภาพสำหรับอุปกรณ์บนโต๊ะอาหการแบบใช้แล้วทิ้ง</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >8.
                                                                        การสร้างสัญญาณ
                                                                        PWM
                                                                        เพื่อควบคุมอินเวอร์เตอร์
                                                                        3 เฟส 3
                                                                        ระดับ</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >9.
                                                                        ออกแบบวงจรกรองสัญญาณรบกวน
                                                                        EMI
                                                                        สำหรับ
                                                                        PFC
                                                                        คอนเวอร์เตอร์</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >10.
                                                                        โมบายแอปพลิเคชันสำหรับประเมินโอกาสในการเป็นโรคหลอดเลือดหัวใจภายใน
                                                                        10
                                                                        ปี</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >11.
                                                                        Materials
                                                                        Design
                                                                        and
                                                                        Modeling
                                                                        of
                                                                        3D-Printed
                                                                        PLA
                                                                        Matrix
                                                                        Composite
                                                                        Reinforced
                                                                        by iron
                                                                        Particles
                                                                        for
                                                                        Biomedical
                                                                        application</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >12.
                                                                        วัสดุโลหะโครงข่ายอินทรีย์สำหรับเพิ่มประสิทธิภาพขั้วอากาศของแบตเตอรี่สังกะสี
                                                                        –
                                                                        อากาศ</strong
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div
                                                            class="tab-pane fade"
                                                            id="pills-projects"
                                                            role="tabpanel"
                                                            aria-labelledby="pills-projects-tab"
                                                        >
                                                            <h3
                                                                class="mt-40 mb-40"
                                                                style="
                                                                    color: #ff6600;
                                                                "
                                                            >
                                                                โครงการที่ได้รับทุนสนับสนุน
                                                            </h3>

                                                            <ul
                                                                class="list-group"
                                                            >
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >1.
                                                                        การประมาณโครงสร้างด้วยทอพอโลยี</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >2.
                                                                        Smart
                                                                        Sigh
                                                                        Glove”
                                                                        Innovative
                                                                        Glove
                                                                        for
                                                                        Real-time
                                                                        Sign
                                                                        Language
                                                                        Translation</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >3.
                                                                        Safety
                                                                        issues
                                                                        of the
                                                                        seatbelt
                                                                        extender
                                                                        devices,
                                                                        according
                                                                        to TIS
                                                                        and UN
                                                                        Regulation
                                                                    </strong>
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >4.
                                                                        Sustainable
                                                                        Living
                                                                        Solutions
                                                                        Advancing
                                                                        EV
                                                                        Infrastructure,
                                                                        Local
                                                                        Product
                                                                        Accessibility,
                                                                        and
                                                                        Digital
                                                                        Connectivity</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >5.
                                                                        รถไฟฟ้าขับเคลื่อนด้วยระบบอัตโนมัติสำหรับขนส่งของในโรงพยาบาล</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >6.
                                                                        การพัฒนาระบบจัดการความร้อนแบเตอรี่บนพื้นฐานของระบบอัดไอแบบเครื่องระเหยคู่โดยใช้อีเจคเตอร์เป็นอุปกรณ์ลดความดันเพื่อการประหยัดพลังงานและความปลอดภัยในยานยนต์ไฟฟ้า</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >7.
                                                                        การเคลือบพื้นผิวชิ้นงานเทอร์โมพลาสติกสตาร์ชด้วยพลาสติกที่ย่อยสลายได้ทางชีวภาพสำหรับอุปกรณ์บนโต๊ะอาหการแบบใช้แล้วทิ้ง</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >8.
                                                                        การสร้างสัญญาณ
                                                                        PWM
                                                                        เพื่อควบคุมอินเวอร์เตอร์
                                                                        3 เฟส 3
                                                                        ระดับ</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >9.
                                                                        ออกแบบวงจรกรองสัญญาณรบกวน
                                                                        EMI
                                                                        สำหรับ
                                                                        PFC
                                                                        คอนเวอร์เตอร์</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >10.
                                                                        โมบายแอปพลิเคชันสำหรับประเมินโอกาสในการเป็นโรคหลอดเลือดหัวใจภายใน
                                                                        10
                                                                        ปี</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >11.
                                                                        Materials
                                                                        Design
                                                                        and
                                                                        Modeling
                                                                        of
                                                                        3D-Printed
                                                                        PLA
                                                                        Matrix
                                                                        Composite
                                                                        Reinforced
                                                                        by iron
                                                                        Particles
                                                                        for
                                                                        Biomedical
                                                                        application</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >12.
                                                                        วัสดุโลหะโครงข่ายอินทรีย์สำหรับเพิ่มประสิทธิภาพขั้วอากาศของแบตเตอรี่สังกะสี
                                                                        –
                                                                        อากาศ</strong
                                                                    >
                                                                </li>
                                                            </ul>

                                                            <h3
                                                                class="mt-40 mb-40"
                                                                style="
                                                                    color: #ff6600;
                                                                "
                                                            >
                                                                โครงการสำรอง
                                                                (Waiting Lists)
                                                                กรณีมีทุนสนับสนุนเพิ่มเติม
                                                                (เรียงตามลำดับ)
                                                            </h3>

                                                            <ul
                                                                class="list-group"
                                                            >
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >1.
                                                                        Monitoring
                                                                        Electric
                                                                        Vehicle
                                                                        Status
                                                                        on
                                                                        Mobile
                                                                        Application</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >2.
                                                                        ระบบแนะแนวการศึกษาด้วยจักรกลสนทนาอัจฉริยะเพื่อเสริมสร้างการรับรู้และการประชาสัมพันธ์
                                                                        (The
                                                                        Education
                                                                        Recommendation
                                                                        System
                                                                        with AI
                                                                        Chatbot
                                                                        to
                                                                        Enhance
                                                                        Awaerness
                                                                        and
                                                                        Publice
                                                                        Relations)</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >3. IOT
                                                                        Gateway
                                                                        Platform
                                                                    </strong>
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >4.
                                                                        การทำนายสัมบัติน้ำมันไบโอดีเซลที่ได้จากกระบวนการทรานส์เอสเทอริฟิเคชันของน้ำมันพืชชนิดต่าง
                                                                        ๆ
                                                                        ด้วยปัญญาประดิษฐ์</strong
                                                                    >
                                                                </li>
                                                                <li
                                                                    class="list-group-item"
                                                                >
                                                                    <strong
                                                                        >5.
                                                                        การออกแบบและประยุกต์ใช้โครงข่าย
                                                                        5G
                                                                        สำหรับระบบ
                                                                        IoT</strong
                                                                    >
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div
                                                            class="tab-pane fade"
                                                            id="pills-details"
                                                            role="tabpanel"
                                                            aria-labelledby="pills-details-tab"
                                                        >
                                                            <img
                                                                src="/images/scholarship/img3.jpg"
                                                                alt=""
                                                                class="img-fluid mb-40 mt-20"
                                                            />

                                                            <!-- Start Accordian -->
                                                            <div
                                                                class="accordion"
                                                                id="accordionExample"
                                                            >
                                                                <div
                                                                    class="accordion-item"
                                                                >
                                                                    <h2
                                                                        class="accordion-header"
                                                                        id="headingOne"
                                                                    >
                                                                        <button
                                                                            class="accordion-button"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseOne"
                                                                            aria-expanded="true"
                                                                            aria-controls="collapseOne"
                                                                        >
                                                                            วัตถุประสงค์ของโครงการ
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id="collapseOne"
                                                                        class="accordion-collapse collapse show"
                                                                        aria-labelledby="headingOne"
                                                                        data-bs-parent="#accordionExample"
                                                                    >
                                                                        <div
                                                                            class="accordion-body"
                                                                        >
                                                                            มหาวิทยาลัยเทคโลยีพระจอมเกล้าพระนครเหนือมีหน่วยงานระดับคณะที่ดำเนินการเรียนการสอนและวิจัยในด้านวิทยาศาสตร์และเทคโนโลยีจำนวนมาก
                                                                            ซึ่งมีศักยภาพและความเข้มแข็งที่แตกต่างกัน
                                                                            เพื่อกระตุ้นให้เกิดวัฒนธรรมองค์กรในการร่วมมือระหว่างคณาจารย์ในคณะต่างๆ
                                                                            อันจะทำให้เกิดการสร้างเครือข่ายความร่วมมือที่กว้างขวางในมจพ.
                                                                            และทำให้มีการแลกเปลี่ยนเรียนรู้และร่วมใช้งานทรัพยากรบุคคล
                                                                            เครื่องมือ
                                                                            อุปกรณ์
                                                                            ห้องปฎิบัติการได้อย่างมีประสิทธิภาพสูงสุด
                                                                            จึงได้มีการริเริ่มที่จะสร้างกลไกหรือกิจกรรมส่งเสริมให้คณาจารย์ต่างคณะทำงานโดยผ่านการร่วมดูแลให้คำปรึกษาโครงงานระดับปริญญาตรีร่วมกัน
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="accordion-item"
                                                                >
                                                                    <h2
                                                                        class="accordion-header"
                                                                        id="headingTwo"
                                                                    >
                                                                        <button
                                                                            class="accordion-button collapsed"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseTwo"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseTwo"
                                                                        >
                                                                            รูปแบบการดำเนินการและแผนงาน
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id="collapseTwo"
                                                                        class="accordion-collapse collapse"
                                                                        aria-labelledby="headingTwo"
                                                                        data-bs-parent="#accordionExample"
                                                                    >
                                                                        <div
                                                                            class="accordion-body"
                                                                        >
                                                                            โครงการจะจัดสรรทุนสนับสนุนให้แก่โครงงานระดับปริญญาตรีที่สมัครเข้าร่วมโครงการและผ่านการคัดเลือกเป็นจำนวนเงินโครงการละ
                                                                            25,000
                                                                            บาท
                                                                            โดยต้องมีอาจารย์ที่ปรึกษาร่วมกันมากกว่าหนึ่งคณะขึ้นไป
                                                                            โดยรับสมัครจากทุกคณะในมจพ.
                                                                            การพิจารณาคัดเลือกจะดำเนินการโดยคณะกรรมการ
                                                                            โดยคัดเลือกจากเนื้อหาของบทคัดย่อหนึ่งหน้า
                                                                            A4
                                                                            โดยจะให้การพิจารณาเป็นพิเศษแก่โครงการที่เป็นความความร่วมมือของกลุ่มคณาจารย์ที่ไม่เคยมีความร่วมมือกันมาก่อน
                                                                            หรือมีหลายคณะที่มีส่วนร่วมในโครงการ
                                                                            หรือเป็นหัวข้อวิจัยที่มีความน่าสนใจเป็นพิเศษ
                                                                            โดยถือการตัดสินของคณะกรรมการเป็นที่สิ้นสุด
                                                                            โดยทุนที่ให้เป็นทุนสนับสนุนค่าใช้จ่ายในการซื้ออุปกรณ์
                                                                            วัสดุ
                                                                            หรือ
                                                                            ครุภัณฑ์
                                                                            โดยเป็นการจ่ายตรงกับสมาคมศิษย์เก่า
                                                                            มจพ.ฯ
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="accordion-item"
                                                                >
                                                                    <h2
                                                                        class="accordion-header"
                                                                        id="headingThree"
                                                                    >
                                                                        <button
                                                                            class="accordion-button collapsed"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseThree"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseThree"
                                                                        >
                                                                            คณะกรรมการดำเนินการ
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id="collapseThree"
                                                                        class="accordion-collapse collapse"
                                                                        aria-labelledby="headingThree"
                                                                        data-bs-parent="#accordionExample"
                                                                    >
                                                                        <div
                                                                            class="accordion-body"
                                                                        >
                                                                            <h6>
                                                                                ศาสตราจารย์
                                                                                ดร.
                                                                                นิสัย
                                                                                เฟื่องเวโรจน์สกุล
                                                                                (หัวหน้าโครงการ)
                                                                            </h6>

                                                                            <span
                                                                                >คณบดีบัณฑิตวิทยาลัยวิศวกรรมศาสตร์นานาชาติสิรินธร
                                                                                ไทย-เยอรมัน
                                                                                (TGGS)</span
                                                                            >
                                                                            <h6
                                                                                class="mt-20"
                                                                            >
                                                                                ผู้ช่วยศาสตราจารย์
                                                                                ดร.
                                                                                นภดล
                                                                                วิวัชรโกเศศ
                                                                                (เลขานุการโครงการ)
                                                                            </h6>

                                                                            <span>
                                                                                รองผู้อำนวยการฝ่ายวิชาการ
                                                                                อุทยานเทคโนโลยี
                                                                            </span>

                                                                            <h6
                                                                                class="mt-20"
                                                                            >
                                                                                ผู้แทนจากหน่วยงานและคณะ
                                                                            </h6>

                                                                            <ul>
                                                                                <li>
                                                                                    1.
                                                                                    อุทยานเทคโนโลยี
                                                                                </li>
                                                                                <li>
                                                                                    2.
                                                                                    สำนักวิจัยวิทยาศาสตร์และเทคโนโลยี
                                                                                </li>
                                                                                <li>
                                                                                    3.
                                                                                    บัณฑิตวิทยาลัย
                                                                                </li>
                                                                                <li>
                                                                                    4.
                                                                                    คณะวิศวกรรมศาสตร์
                                                                                </li>
                                                                                <li>
                                                                                    5.
                                                                                    คณะวิทยาศาสตร์ประยุกต์
                                                                                </li>
                                                                                <li>
                                                                                    6.
                                                                                    วิทยาลัยเทคโนโลยีอุตสาหกรรม
                                                                                </li>
                                                                                <li>
                                                                                    7.
                                                                                    คณะครุศาสตร์อุตสาหกรรม
                                                                                </li>
                                                                                <li>
                                                                                    8.
                                                                                    คณะวิทยาศาสตร์พลังงานและสิ่งแวดล้อม
                                                                                </li>
                                                                                <li>
                                                                                    9.
                                                                                    คณะวิศวกรรมศาสตร์และเทคโนโลยี
                                                                                </li>
                                                                                <li>
                                                                                    10.
                                                                                    คณะเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล
                                                                                </li>
                                                                                <li>
                                                                                    11.
                                                                                    บัณฑิตวิทยาลัยวิศวกรรมศาสตร์นานาชาติสิรินธร
                                                                                    ไทย-เยอรมัน
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--  -->

                                                                <div
                                                                    class="accordion-item"
                                                                >
                                                                    <h2
                                                                        class="accordion-header"
                                                                        id="headingFour"
                                                                    >
                                                                        <button
                                                                            class="accordion-button collapsed"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseFour"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseFour"
                                                                        >
                                                                            แผนการดำเนินการและระยะเวลาดำเนินการ
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id="collapseFour"
                                                                        class="accordion-collapse collapse"
                                                                        aria-labelledby="headingFour"
                                                                        data-bs-parent="#accordionExample"
                                                                    >
                                                                        <div
                                                                            class="accordion-body"
                                                                        >
                                                                            <ul
                                                                                class="list-group"
                                                                            >
                                                                                <li
                                                                                    class="list-group-item"
                                                                                >
                                                                                    รับสมัครผลงาน
                                                                                    ถึงวันที่
                                                                                    30
                                                                                    มิถุนายน
                                                                                    2566
                                                                                </li>
                                                                                <li
                                                                                    class="list-group-item"
                                                                                >
                                                                                    การนำเสนอโครงการและการคัดเลือก
                                                                                    1
                                                                                    -15
                                                                                    กรกฎาคม
                                                                                    2566
                                                                                </li>
                                                                                <li
                                                                                    class="list-group-item"
                                                                                >
                                                                                    ประกาศผลการคัดเลือก
                                                                                    31
                                                                                    กรกฎาคม
                                                                                    2566
                                                                                </li>
                                                                                <li
                                                                                    class="list-group-item"
                                                                                >
                                                                                    จ่ายทุนงวดแรกจำนวน
                                                                                    15,000
                                                                                    บาท
                                                                                    ในเดือนสิงหาคม
                                                                                    2566
                                                                                    และงวดที่สอง
                                                                                    จำนวน
                                                                                    10,000
                                                                                    บาทภายหลังจากส่งผลงานเป็นโปสเตอร์และวิดีทัศน์
                                                                                    ในช่วง
                                                                                    มกราคม
                                                                                    –
                                                                                    เมษายน
                                                                                    2567
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    class="accordion-item"
                                                                >
                                                                    <h2
                                                                        class="accordion-header"
                                                                        id="headingFive"
                                                                    >
                                                                        <button
                                                                            class="accordion-button collapsed"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseFive"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseFive"
                                                                        >
                                                                            คุณสมบัติและการรับสมัคร
                                                                        </button>
                                                                    </h2>
                                                                    <div
                                                                        id="collapseFive"
                                                                        class="accordion-collapse collapse"
                                                                        aria-labelledby="headingFive"
                                                                        data-bs-parent="#accordionExample"
                                                                    >
                                                                        <div
                                                                            class="accordion-body"
                                                                        >
                                                                            <ul
                                                                                class="list-group"
                                                                            >
                                                                                <li
                                                                                    class="list-group-item"
                                                                                >
                                                                                    เป็นโครงงานปริญญานิพนธ์ที่ดำเนินการโดยนักศึกษาระดับปริญญาตรีจากส่วนงานระดับคณะใน
                                                                                    มจพ.
                                                                                    ที่มีกำหนดแล้วเสร็จในปีการศึกษา
                                                                                    2566
                                                                                    (สามารถเริ่มโครงการมาก่อนในภาคการศึกษา
                                                                                    2/2565
                                                                                    ได้)
                                                                                </li>
                                                                                <li
                                                                                    class="list-group-item"
                                                                                >
                                                                                    เป็นโครงงานที่มีคณะอาจารย์ที่ปรึกษาร่วมดูแลโครงงาน
                                                                                    มาจากมากกว่าหนึ่งคณะหรือส่วนงานขึ้นไป
                                                                                </li>
                                                                                <li
                                                                                    class="list-group-item"
                                                                                >
                                                                                    ให้อาจารย์ที่ปรึกษาหลักเป็นผู้กรอกใบสมัครและให้ข้อมูล
                                                                                    พร้อมทั้ง
                                                                                    Upload
                                                                                    ไฟล์บทคัดย่อ
                                                                                    (.doc)
                                                                                    ที่มีชื่อหัวข้อ
                                                                                    ชื่ออาจารย์ที่ปรึกษาทั้งหมด
                                                                                    และชื่อนักศึกษาทั้งหมด
                                                                                    บทคัดย่อและรูปประกอบหนึ่งรูป
                                                                                    ความยาวหนึ่งหน้า
                                                                                    A4
                                                                                    โดยใช้
                                                                                    Google
                                                                                    form
                                                                                    จากปุ่ม
                                                                                    Register
                                                                                    Here
                                                                                    ด้านบน
                                                                                    <a
                                                                                        style="
                                                                                            color: #ff6600;
                                                                                        "
                                                                                        href="https://tggs.kmutnb.ac.th/wp-content/uploads/2023/04/Abstract-example-for-KMUTNB-Collaboration-Project2.1.jpg"
                                                                                        target="_blank"
                                                                                    >
                                                                                        (ดูตัวอย่างบทคัดย่อ
                                                                                        คลิกที่นี่)</a
                                                                                    >
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!-- End Accordian -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Tab -->

                                            <div class="card mt-40 p-4">
                                                <h5>
                                                    สอบถามรายละเอียดเพิ่มเติม
                                                </h5>
                                                <h6 class="mt-20">
                                                    ผู้ช่วยศาสตราจารย์ ดร. นภดล
                                                    วิวัชรโกเศศ
                                                </h6>
                                                <h6>
                                                    รองผู้อำนวยการอุทยานเทคโนโลยี
                                                </h6>
                                                <h6 class="mt-20">
                                                    E-mail:
                                                    nophadon.w@eng.kmutnb.ac.th
                                                </h6>
                                                <h6>โทรศัพท์ 087 680 4874</h6>
                                                <div><hr></div>
                                                <img src="/images/scholarship/img4.jpg" alt="" class="img-fluid">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useRuntimeConfig } from "#app";
dayjs.extend(buddhistEra);
const route = useRoute();

const item = ref({
    title: "โครงการทุนสนับสนุนโครงงานปริญญาตรี เพื่อส่งเสริมความร่วมมือระหว่างคณะใน มจพ.",
});

const config = useRuntimeConfig();
const { apiBase } = config.public;

useHead({
    title: item.value.title,
});
</script>

<style scoped>
.breadcrumb__title {
    font-size: 50px;
}

ul {
    list-style-type: none;
    padding: 0;
}
ul.list-group > li {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 8px;
    font-size: 16px;
}

li strong {
    color: #000000;
}
</style>
