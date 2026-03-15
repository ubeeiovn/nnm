"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "en" | "vi";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      departments: "Departments",
      partners: "Partners",
      contact: "Contact",
    },
    hero: {
      tagline: "NNM Import & Export Inc",
      heading1: "Quality Goods,",
      heading2: "seamlessly traded",
      body: "A federally incorporated Canadian company empowering businesses through reliable trade of consumer goods between Vietnam and Canada.",
      cta: "Request a Quotation",
    },
    about: {
      sectionTag: "About Us",
      heading: "NNM Import & Export",
      whoTag: "Who We Are",
      whoBody1: "NNM IE Inc. is a federally incorporated company established in 2024, operating across Canada. We specialize in the trade of consumer goods — both for direct and indirect consumption — between Vietnam and Canada.",
      whoMission: "Our Mission:",
      whoMissionBody: "To empower businesses by facilitating seamless and reliable trade of quality consumer goods between Vietnam and Canada.",
      complianceTag: "Compliance & Reliability",
      cptppLabel: "CPTPP Mastery:",
      cptppBody: "We specialize in maximizing duty-free access under the CPTPP, ensuring all shipments strictly adhere to Rules of Origin to provide our clients with the most competitive tariff treatments.",
      regLabel: "Regulatory Precision:",
      regBody: "Our team handles full documentation for both markets, from Canadian Export Declarations to Vietnam's import compliance requirements.",
      valuesTag: "Our Foundation",
      valuesHeading: "Core Values",
      values: [
        { label: "Integrity", desc: "We operate with full transparency and honesty in every trade." },
        { label: "Customer Focus", desc: "Your business goals are at the center of everything we do." },
        { label: "Global Awareness", desc: "Deep knowledge of international trade, tariffs, and regulations." },
        { label: "Operational Excellence", desc: "Precise documentation and compliance at every step." },
      ],
    },
    departments: {
      sectionTag: "Our Structure",
      heading: "Departments",
      items: [
        {
          label: "a",
          name: "NNM Import and Export",
          description: "Facilitating seamless and reliable trade of quality consumer goods between Vietnam and Canada.",
        },
        {
          label: "b",
          name: "NNM Product Placement",
          description: "Product placing and product tasting services to help brands enter and grow in new markets.",
        },
        {
          label: "c",
          name: "Wholesale Custom Packaging & Marketing",
          description: "Custom packaging solutions and marketing material tailored for businesses of all sizes.",
        },
      ],
    },
    partners: {
      sectionTag: "Our Network",
      heading: "Partners",
    },
    contact: {
      sectionTag: "Contact",
      heading: "Get in Touch",
      body: "Ready to explore trade opportunities between Vietnam and Canada? Request a quotation or reach out to start a conversation.",
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
    footer: {
      rights: "All rights reserved.",
      drink: "Please drink responsibly. Must be of legal drinking age.",
    },
  },
  vi: {
    nav: {
      home: "Trang Chủ",
      about: "Giới Thiệu",
      departments: "Bộ Phận",
      partners: "Đối Tác",
      contact: "Liên Hệ",
    },
    hero: {
      tagline: "NNM Import & Export Inc",
      heading1: "Hàng Chất Lượng,",
      heading2: "giao thương liền mạch",
      body: "Công ty được đăng ký liên bang tại Canada, hỗ trợ doanh nghiệp thông qua hoạt động thương mại hàng tiêu dùng đáng tin cậy giữa Việt Nam và Canada.",
      cta: "Yêu Cầu Báo Giá",
    },
    about: {
      sectionTag: "Giới Thiệu",
      heading: "NNM Import & Export",
      whoTag: "Chúng Tôi Là Ai",
      whoBody1: "NNM IE Inc. là công ty được thành lập năm 2024, hoạt động trên toàn Canada. Chúng tôi chuyên về thương mại hàng tiêu dùng — cả tiêu dùng trực tiếp và gián tiếp — giữa Việt Nam và Canada.",
      whoMission: "Sứ Mệnh:",
      whoMissionBody: "Hỗ trợ doanh nghiệp thông qua hoạt động thương mại hàng tiêu dùng chất lượng liền mạch và đáng tin cậy giữa Việt Nam và Canada.",
      complianceTag: "Tuân Thủ & Độ Tin Cậy",
      cptppLabel: "Thành Thạo CPTPP:",
      cptppBody: "Chúng tôi chuyên tối ưu hóa quyền tiếp cận miễn thuế theo CPTPP, đảm bảo tất cả lô hàng tuân thủ nghiêm ngặt Quy tắc Xuất xứ để mang lại mức thuế cạnh tranh nhất cho khách hàng.",
      regLabel: "Độ Chính Xác Pháp Lý:",
      regBody: "Đội ngũ của chúng tôi xử lý đầy đủ hồ sơ cho cả hai thị trường, từ Khai báo Xuất khẩu Canada đến các yêu cầu tuân thủ nhập khẩu của Việt Nam.",
      valuesTag: "Nền Tảng Của Chúng Tôi",
      valuesHeading: "Giá Trị Cốt Lõi",
      values: [
        { label: "Chính Trực", desc: "Chúng tôi hoạt động với sự minh bạch và trung thực tuyệt đối trong mọi giao dịch." },
        { label: "Lấy Khách Hàng Làm Trọng Tâm", desc: "Mục tiêu kinh doanh của bạn là trung tâm của mọi việc chúng tôi làm." },
        { label: "Hiểu Biết Toàn Cầu", desc: "Am hiểu sâu về thương mại quốc tế, thuế quan và các quy định liên quan." },
        { label: "Xuất Sắc Trong Vận Hành", desc: "Hồ sơ chính xác và tuân thủ đầy đủ ở mọi bước." },
      ],
    },
    departments: {
      sectionTag: "Cơ Cấu Tổ Chức",
      heading: "Bộ Phận",
      items: [
        {
          label: "a",
          name: "NNM Import and Export",
          description: "Tạo điều kiện cho hoạt động thương mại hàng tiêu dùng chất lượng liền mạch giữa Việt Nam và Canada.",
        },
        {
          label: "b",
          name: "NNM Product Placement",
          description: "Dịch vụ trưng bày và thử nghiệm sản phẩm, giúp thương hiệu thâm nhập và phát triển trên thị trường mới.",
        },
        {
          label: "c",
          name: "Bao Bì & Marketing Tùy Chỉnh",
          description: "Giải pháp bao bì tùy chỉnh và vật liệu marketing phù hợp cho doanh nghiệp mọi quy mô.",
        },
      ],
    },
    partners: {
      sectionTag: "Mạng Lưới Của Chúng Tôi",
      heading: "Đối Tác",
    },
    contact: {
      sectionTag: "Liên Hệ",
      heading: "Kết Nối Với Chúng Tôi",
      body: "Sẵn sàng khám phá cơ hội thương mại giữa Việt Nam và Canada? Yêu cầu báo giá hoặc liên hệ để bắt đầu cuộc trò chuyện.",
      email: "Email",
      phone: "Điện Thoại",
      location: "Địa Điểm",
    },
    footer: {
      rights: "Bảo lưu mọi quyền.",
      drink: "Vui lòng uống có trách nhiệm. Phải đủ độ tuổi hợp pháp.",
    },
  },
};

type TranslationsType = typeof translations.en;

const LangContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TranslationsType;
}>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");
  return (
    <LangContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
