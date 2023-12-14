"use client";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { notification } from "antd";
import Input from "../Input";
import { useStateProvider } from "@context/StateProvider";
import { useData } from "@context/DataProviders";
import { addDocument } from "@config/Services/Firebase/FireStoreDB";
import { FaCloudUploadAlt } from "react-icons/fa";
import { uploadImage } from "@components/items/server-items/Handle";

const AddBranch: React.FC = () => {
  const [Title, setTitle] = useState<string>("");
  const [image, setImage] = useState<any>("");
  const [imageUrl, setImageUrl] = useState<any>("");

  const { setIsRefetch, setDropDown } = useStateProvider();

  const HandleUploadImage = (e: any, locate: string) => {
    uploadImage(e, locate).then((data: any) => {
      setImageUrl(data);
    });
  };
  const handleDiscard = () => {};

  const HandleSubmit = () => {
    if (Title === "" || (image === "" && imageUrl === "")) {
      notification.error({
        message: "Lỗi !",
        description: "Vui lòng nhập đầy đủ thông tin!",
      });
    } else {
      const data = {
        name: Title,
        image: image ? image : imageUrl,
      };
      console.log(data);
      addDocument("branches", data).then(() => {
        notification.success({
          message: "Thành công!",
          description: "Thông tin đã được CẬP NHẬT !",
        });
        setIsRefetch("CRUD branches");
        setDropDown("");
        handleDiscard();
      });
    }
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] w-full flex items-center justify-center 
       h-full
      z-50 absolute rounded-md duration-300 `}
    >
      <div className="w-[80vw] h-[75vh] relative bg-white flex font-LexendDeca cursor-pointer rounded-sm ">
        <div className="items-center justify-center  w-full flex  ">
          <div className="flex w-[56vw]  justify-center gap-4 flex-col items-center ">
            <p className="text-2xl font-bold text-center mb-5 uppercase">
              Thêm đối tác
            </p>

            <div className="flex gap-5 justify-center w-[50vw] mx-auto">
              <div className="flex-1">
                <Input
                  text={`Tên đối tác`}
                  Value={Title}
                  setValue={(e: any) => setTitle(e.target.value)}
                  Input={true}
                  PlaceHolder=""
                />
                <Input
                  text={`Link Logo Đối tác`}
                  Value={image}
                  setValue={(e: any) => setImage(e.target.value)}
                  Input={true}
                  PlaceHolder=""
                />
              </div>
              <div className="flex-1">
                <label className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-xl">
                        <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                      </p>
                      <p className="text-xl font-semibold">
                        Chọn Logo để tải lên
                      </p>
                    </div>
                    <p className="text-gray-400  text-center mt-10 text-sm leading-10">
                      Định dạng jpg hoặc png <br />
                    </p>
                    <p className="bg-[#0047AB] hover:bg-[#0000FF] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                      Chọn từ thiết bị
                    </p>
                  </div>
                  <input
                    type="file"
                    name="upload-video"
                    className="w-0 h-0"
                    onChange={(e) => HandleUploadImage(e, "slides")}
                  />
                </label>
              </div>
            </div>
            <div className="flex gap-6 mt-10">
              <button
                onClick={() => handleDiscard()}
                type="button"
                className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Xóa
              </button>
              <button
                onClick={() => HandleSubmit()}
                type="button"
                className="bg-[#df6cad] hover:bg-red-500 focus:outline-none focus:shadow-outline text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Tải lên
              </button>
            </div>
          </div>
        </div>

        <AiFillCloseCircle
          className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
          onClick={() => {
            setDropDown("");
          }}
        />
      </div>
    </div>
  );
};

export default AddBranch;
