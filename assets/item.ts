import { SiZalo } from "react-icons/si";
import {
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsBatteryCharging,
  BsFillSendExclamationFill,
  BsFillSendCheckFill,
  BsFillSendXFill,
} from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import {
  AiFillInstagram,
  AiOutlineProfile,
  AiOutlineSlack,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaFirstOrderAlt, FaTiktok } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiNetworkChart, BiSlideshow } from "react-icons/bi";
import {
  TbCarouselHorizontal,
  TbCubeSend,
  TbListDetails,
  TbSlideshow,
} from "react-icons/tb";
import {
  MdAirlineSeatReclineNormal,
  MdManageAccounts,
  MdOutlineLocalCarWash,
  MdOutlinePostAdd,
} from "react-icons/md";
import { CgListTree, CgSize } from "react-icons/cg";
import { IoMdColorWand } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";

import { CiViewList } from "react-icons/ci";
import { IconType } from "react-icons/lib";
import { IoFlashOutline } from "react-icons/io5";

interface IconMappingType {
  [key: string]: IconType;
}

export const IconMapping: IconMappingType = {
  IoFlashOutline: IoFlashOutline,
  MdManageAccounts: MdManageAccounts,
  SiZalo: SiZalo,
  BsFacebook: BsFacebook,
  HiOutlineUserGroup: HiOutlineUserGroup,
  BsMessenger: BsMessenger,
  AiFillInstagram: AiFillInstagram,
  FaTiktok: FaTiktok,
  AiOutlineTwitter: AiOutlineTwitter,
  BsYoutube: BsYoutube,
  BiSlideshow: BiSlideshow,
  TbListDetails: TbListDetails,
  TbSlideshow: TbSlideshow,
  BiNetworkChart: BiNetworkChart,
  MdOutlinePostAdd: MdOutlinePostAdd,
  AiOutlineUnorderedList: AiOutlineUnorderedList,
  CgListTree: CgListTree,
  FaFirstOrderAlt: FaFirstOrderAlt,
  AiOutlineSlack: AiOutlineSlack,
  BsBatteryCharging: BsBatteryCharging,
  IoMdColorWand: IoMdColorWand,
  MdAirlineSeatReclineNormal: MdAirlineSeatReclineNormal,
  CgSize: CgSize,
  MdOutlineLocalCarWash: MdOutlineLocalCarWash,
  TbCarouselHorizontal: TbCarouselHorizontal,
  GiExitDoor: GiExitDoor,
  AiOutlineProfile: AiOutlineProfile,
  BsFillSendExclamationFill: BsFillSendExclamationFill,
  BsFillSendCheckFill: BsFillSendCheckFill,
  TbCubeSend: TbCubeSend,
  BsFillSendXFill: BsFillSendXFill,
  CiViewList: CiViewList,
};

export const ProductSidebarAdmin = [
  {
    name: "Giới thiệu",
    icon: "AiOutlineSlack",
  },
  {
    name: "Sản phẩm",
    icon: "FaFirstOrderAlt",
  },
  {
    name: "Sale",
    icon: "IoFlashOutline",
  },
  {
    name: "Đơn hàng",
    icon: "AiOutlineUnorderedList",
  },
  {
    name: "Chi nhánh",
    icon: "CgListTree",
  },
];

export const WebsiteSidebarAdmin = [
  {
    name: "Thông tin website",
    icon: "TbListDetails",
  },
  {
    name: "Slide trình chiếu",
    icon: "TbSlideshow",
  },
  {
    name: "Kênh truyền thông",
    icon: "BiNetworkChart",
  },
  {
    name: "Bài viết",
    icon: "MdOutlinePostAdd",
  },
  {
    name: "Video",
    icon: "BiSlideshow",
  },
  {
    name: "Tài khoản",
    icon: "MdManageAccounts",
  },
];

export const SocialMediaDashboard = [
  {
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-400 hover:bg-white",
  },
  {
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },
  {
    title: "Trang Fanpage",
    icon: "HiOutlineUserGroup",
    image:
      "https://img.freepik.com/premium-photo/3d-pile-facebook-logo-background-facebook-famous-social-media-platform_73903-705.jpg?w=2000",
    style: "hover:bg-white hover:text-black p-1",
  },
  {
    title: "Trang Messenger",
    icon: "BsMessenger",
    image:
      "https://img.freepik.com/premium-photo/3d-facebook-messenger-logo-application-blue-background-social-media-communication_73903-695.jpg",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang Instagram",
    icon: "AiFillInstagram",
    image: "https://images2.alphacoders.com/123/1230947.png",
    style: "hover:bg-pink-500 hover:text-white",
  },

  {
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    title: "Trang Twitter",
    icon: "AiOutlineTwitter",
    image:
      "https://vietnix.vn/wp-content/uploads/2022/07/mang-xa-hoi-twitter.webp",
    style: "hover:bg-white hover:text-blue-600 p-1",
  },
  {
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

export const OrderDashboardItems = [
  {
    name: "Mới",
    icon: "BsFillSendExclamationFill",
  },
  {
    name: "Đã phản hồi",
    icon: "BsFillSendCheckFill",
  },
  {
    name: "Đã thanh toán",
    icon: "TbCubeSend",
  },
  {
    name: "Hủy đơn",
    icon: "BsFillSendXFill",
  },
  {
    name: "Chi tiết đơn hàng",
    icon: "CiViewList",
  },
];

/*<---------------------------------------------------------- Custom System ----------------------------------------------------------> */

export const SocialMediaCustom = [
  {
    id: 0,
    title: "Trang zalo",
    icon: "SiZalo",
    image:
      "https://atpsoftware.vn/wp-content/uploads//2020/03/20211208103735_id_zalo-1.jpg",
    style: "hover:text-blue-600 hover:bg-white ",
  },
  {
    id: 1,
    title: "Facebook cá nhân",
    icon: "BsFacebook",
    image:
      "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2slMjBsb2dvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    style: "hover:bg-white hover:text-blue-600",
  },

  {
    id: 5,
    title: "Trang Tiktok",
    icon: "FaTiktok",
    image: "https://images.alphacoders.com/112/1123670.png",
    style: "hover:bg-black hover:text-white p-1",
  },

  {
    id: 7,
    title: "Trang YouTube",
    icon: "BsYoutube",
    image:
      "https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg",
    style: "hover:bg-red-600 hover:text-white p-1",
  },
];

export const HeaderItems = [
  {
    label: "Mua hàng",
    value: "chinh-sach-dat-hang",
  },
  {
    label: "Khuyến mãi",
    value: "khuyen-mai",
  },
  {
    label: "Thực đơn",
    value: "thuc-don",
  },
  {
    label: "Blog",
    value: "blog",
  },
];

export const ToolsTipsSocialMediaItems = [
  {
    title: "zalo.me/...",
  },
  {
    title: "www.facebook.com/...",
  },
  {
    title: "www.facebook.com/plugins/page.php?href=....",
  },
  {
    title: "",
  },
  {
    title: "www.instagram.com/...",
  },
  {
    title: "www.tiktok.com/...",
  },
  {
    title: "www.twitter.com/...",
  },
  {
    title: "www.youtube.com/...",
  },
];

/*<-------------------------------------------------------------------------------------------------------------------- CUSTOM --------------------------------------------------------------------------------------------------------------------> */

export const TypeProductItems = [
  {
    label: "Hàng Đông Lạnh",
    value: "hang-dong-lanh",
    image:
      "https://firebasestorage.googleapis.com/v0/b/asiachau-2b968.appspot.com/o/1.jpg?alt=media&token=3f7a2961-2b45-48c4-ae89-39d576c30a14",
  },

  {
    label: "Thực phẩm Việt Nam",
    value: "thuc-pham-viet-nam",
    image:
      "https://firebasestorage.googleapis.com/v0/b/asiachau-2b968.appspot.com/o/2.jpg?alt=media&token=597915b6-f0c1-437d-b4bc-0c41a67146f6",
  },
  {
    label: "Rau Củ Quả",
    value: "rau-cu-qua",
    image:
      "https://firebasestorage.googleapis.com/v0/b/asiachau-2b968.appspot.com/o/3.jpg?alt=media&token=3a5550b7-9dec-491b-ad6e-d4a1520a9f41",
  },
  {
    label: "Đồ Ăn Vặt",
    value: "do-an-vat",
    image:
      "https://firebasestorage.googleapis.com/v0/b/asiachau-2b968.appspot.com/o/-%20High%20Quality%20Meat%20-.jpg?alt=media&token=86318e72-9c34-47ca-b5b5-deb6d0c34103",
  },
  {
    label: "Nước Uống",
    value: "nuoc-uong",
    image:
      "https://firebasestorage.googleapis.com/v0/b/asiachau-2b968.appspot.com/o/4.jpg?alt=media&token=fdd5eea4-bdce-4253-8972-2c2fdb47ee89",
  },
  {
    label: "Thực Phẩm Hàng Thái Nhật",
    value: "thuc-pham-hang-thai-nhat",
    image:
      "https://firebasestorage.googleapis.com/v0/b/asiachau-2b968.appspot.com/o/5.jpg?alt=media&token=562e63f5-48b6-4f38-a4a3-0d378e08b06b",
  },
  {
    label: "Tiện Ích Gia Đình",
    value: "tien-ich-gia-dinh",
    image:
      "https://firebasestorage.googleapis.com/v0/b/asiachau-2b968.appspot.com/o/6.jpg?alt=media&token=73af53a1-64d4-48cd-8845-c607036ed19a",
  },
];

export const TypePostItems = [
  {
    label: "Bài Viết",
    value: "News",
  },
  {
    label: "Giao nhận hàng",
    value: "Policy",
  },
  {
    label: "Chính sách đổi trả",
    value: "Policy",
  },
  {
    label: "Chính sách đặt hàng",
    value: "Policy",
  },
  {
    label: "Chính sách bảo mật",
    value: "Policy",
  },
];

export const PolicyItems = [
  {
    label: "Giao nhận hàng",
    value: "giao-nhan-hang",
  },
  {
    label: "Chính sách đổi trả",
    value: "chinh-sach-doi-tra",
  },
  {
    label: "Chính sách đặt hàng",
    value: "chinh-sach-dat-hang",
  },
  {
    label: "Chính sách bảo mật",
    value: "chinh-sach-bao-mat",
  },
];

export const ProductTypeItems = [
  {
    label: "Sản phẩm mới",
    value: "",
  },
  {
    label: "Sản phẩm nổi bật",
    value: "",
  },

  {
    label: "Sản phẩm bán chạy",
    value: "",
  },
  {
    label: "Sản phẩm khuyến mãi",
    value: "",
  },
];

export const TopFooterItems = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/fresher.14f2aadd.png?alt=media&token=be56aab4-f2c5-42a8-a6d8-4b32c7109211",
    label: "Hoàn trả không gặp rắc rối",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/security.d7d83cc5.png?alt=media&token=8add07d2-33df-4a2c-b07a-1c983fc4b204",
    label: "Giao dịch an toàn",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/free-ship.658704f1.png?alt=media&token=6642d93d-9c27-4113-affc-e6a02d8811b1",
    label: "Vận chuyển cực kỳ nhanh chóng",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/support-24-24.1848cf83.png?alt=media&token=8fe9426e-066c-4be6-b0b2-21026be68d27",
    label: "Đảm bảo chất lượng",
  },
];

export {};
