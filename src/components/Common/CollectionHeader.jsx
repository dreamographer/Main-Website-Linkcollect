import React from "react";
import Search from "./Search";
import { useState } from "react";
import SortBy from "../../assets/sortBy.svg";
import Plus from "../../assets/plus.svg";
import Button from "../UI/Button/Button"
import CollectionModal from "./CollectionModal";
const CollectionHeader = ({ name,isOwner,windowWidth,setQuery}) => {
  // sort by dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const [openModal,setOpenModal] = useState(false);

  // To handle modal open and close
  const createModalHandler = () =>{
    setOpenModal(prev=>!prev);
  }



  return (
    <div className="flex flex-col items-start justify-center w-full gap-8 mx-auto 3xl:px-0 px-8 max-w-[1500px]">
        {/* Search bar , add collection , sort by */}
        <CollectionModal isOpen={openModal} modalCloseHandler={createModalHandler}/>
        <div className="flex flex-col items-start justify-center w-full gap-4 ">
          {/* Modify this */}
          <div className="flex items-center justify-between w-full ">
            <p
              className={`text-left font-medium  text-[30px] text-neutral-700  ${
                windowWidth < 700 ? "hidden" : ""
              }`}
            >
              {name}
            </p>
            {isOwner && 
            <Button variant="primary" className="w-48 h-[46px]" onClick={createModalHandler}>
              <img src={Plus} alt="" />
                Add collection
            </Button>
            }
          </div>

          <div
            className={`w-full flex items-start justify-between gap-6 ${
              windowWidth < 700 ? "hidden" : ""
            }`}
          >
            <div className=" w-[calc(100%-212px)]">
              <Search setQuery={setQuery}/>
            </div>

            {/* sort by */}
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-48  cursor-pointer h-[46px] relative p-4 flex items-center justify-center rounded-lg border-neutral-300 bg-neutral-200 gap-2 border"
            >
              <img src={SortBy} alt="" />
              <span className="text-sm font-medium">Sort by</span>

              {/* dropdown */}
              {showDropdown && (
                <div className="w-[188px] rounded border absolute z-50 bottom-[-140px] transition-all duration-500 right-0 border-neutral-300 p-3 flex items-start justify-center flex-col gap-2 bg-neutral-100 ">
                  <p className="text-base font-normal text-neutral-800">
                    Most upvotes
                  </p>
                  <hr className="w-full border border-neutral-300" />
                  <p className="text-base font-normal text-neutral-800">
                    Most links
                  </p>
                  <hr className="w-full border border-neutral-300" />
                  <p className="text-base font-normal text-neutral-800">
                    Recently updated
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default CollectionHeader;
