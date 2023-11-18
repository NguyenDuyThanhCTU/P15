import Input from "@components/admin/Item/Input";
import { uploadImage } from "@components/items/server-items/Handle";
import { updateDocument } from "@config/Services/Firebase/FireStoreDB";
import { useStateProvider } from "@context/StateProvider";
import { notification } from "antd";
import React from "react";
import { FaPen } from "react-icons/fa";

const UserInformation = ({ user }: any) => {
  const [imageUrl, setImageUrl] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const { setIsRefetch } = useStateProvider();

  const HandleUploadImage = (e: any, locate: string) => {
    uploadImage(e, locate).then((data: any) => {
      setImageUrl(data);
    });
  };

  const HandleSubmit = () => {
    //check valid phone, email, name
    if (!name || !email || !phone || !imageUrl) {
      notification.warning({ message: "Vui lòng nhập đầy đủ thông tin" });
    } else {
      const regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      const regexName = /^[a-zA-Z0-9]+$/;
      if (!regexEmail.test(email)) {
        return notification.error({
          message: "Email không hợp lệ",
        });
      }
      if (!regexPhone.test(phone)) {
        return notification.error({
          message: "Số điện thoại không hợp lệ",
        });
      }
      if (!regexName.test(name)) {
        return notification.error({
          message: "Tên không hợp lệ",
        });
      }

      const data = {
        name: name,
        photoURL: imageUrl,
        email: email,
        phone: phone,
      };

      updateDocument("accounts", user?.id, data).then(() => {
        notification.success({
          message: "Cập nhật thông tin thành công",
        });
        setIsRefetch("CRUD accounts");
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <label>
            <div className=" cursor-pointer relative">
              <div className="h-20 w-20 ">
                <img
                  src={imageUrl ? imageUrl : user?.photoURL}
                  alt="logo"
                  className="object-contain p-1 w-full h-full rounded-full border"
                />
              </div>
              <div className="absolute text-white bg-black rounded-full p-2 -top-2 -right-2">
                <FaPen />
              </div>
              <input
                type="file"
                className="w-0 h-0"
                onChange={(e) => HandleUploadImage(e, "profile")}
              />
            </div>
          </label>
        </div>
        <div className="">
          <Input
            text="Tên"
            value={name}
            setValue={(e: any) => setName(e.target.value)}
            Input={true}
            PlaceHolder={name ? name : user?.name}
          />
          <Input
            text="Email"
            value={email}
            setValue={(e: any) => setEmail(e.target.value)}
            Input={true}
            PlaceHolder={email ? email : user?.email}
          />
          <Input
            text="Số điện thoại"
            value={phone}
            setValue={(e: any) => setPhone(e.target.value)}
            Input={true}
            PlaceHolder={phone ? phone : user?.phone}
          />
        </div>
        <div className="mt-5">
          <div
            className="px-6 py-2 rounded-full bg-mainyellow text-white cursor-pointer hover:bg-orange-500 duration-300"
            onClick={() => HandleSubmit()}
          >
            Cập nhật
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
