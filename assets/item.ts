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
    value: "mua-hang",
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
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/category_20210729151250_0.png?alt=media&token=797e56cf-afbf-4cea-a9e7-a8e131049a41",
  },
  {
    label: "Hải Sản Tươi Sống",
    value: "hai-san-tuoi-song",
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/category_20210729151303_0.png?alt=media&token=b9d15971-d65b-4209-bf3e-4f9221e01594",
  },
  {
    label: "Thực phẩm Việt Nam",
    value: "thuc-pham-viet-nam",
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/category_20210729151315_0.png?alt=media&token=70925ed8-b2fd-41fc-8f82-cfcb715da692",
  },
  {
    label: "Rau Củ Quả",
    value: "rau-cu-qua",
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/category_20210729151331_0.png?alt=media&token=03174078-0864-4c6b-b6e1-8612985e3b59",
  },
  {
    label: "Đồ Ăn Vặt",
    value: "do-an-vat",
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/category_20210729151331_0.png?alt=media&token=03174078-0864-4c6b-b6e1-8612985e3b59",
  },
  {
    label: "Nước Uống",
    value: "nuoc-uong",
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/category_20210729151342_0.png?alt=media&token=8792cda1-7f18-4707-b213-fc1f2c9046f7",
  },
  {
    label: "Thực Phẩm Hàng Thái Nhật",
    value: "thuc-pham-hang-thai-nhat",
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/category_20210729151408_0.png?alt=media&token=1eaddc53-8e6f-4199-8a92-2dfa83605197",
  },
  {
    label: "Tiện Ích Gia Đình",
    value: "tien-ich-gia-dinh",
    image:
      "https://firebasestorage.googleapis.com/v0/b/taphoa-605ab.appspot.com/o/category_20210729151420_0.png?alt=media&token=8c81d8d3-b549-4492-8c8b-48cd92c9aa56",
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
