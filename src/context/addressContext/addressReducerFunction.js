import { getAddress, updateStorage } from "../../utilities/updateStorage";
import { v4 as uuid } from "uuid";

export const addressReducerFunction = (addressState, action) => {
  switch (action.type) {
    case "ADD-ADDRESS": {
      const updatedAddress = {
        ...addressState,
        address: [...addressState.address, action.payload],
      };
      updateStorage(updatedAddress.address);
      return updatedAddress;
    }
    case "ADD-DUMMY-ADDRESS": {
      const updatedAddress = {
        ...addressState,
        address: [
          ...addressState.address,
          {
            id: uuid(),
            fullName: "Varun Verma",
            contact: "8574546688",
            pincode: "273015",
            house: "124/64t",
            area: "Jateapur North",
            landmark: "MnM Bakers",
            city: "Gorakhpur",
            state: "Uttar Pradesh",
          },
        ],
      };
      updateStorage(updatedAddress.address);
      return updatedAddress;
    }
    case "DELETE-ADDRESS": {
      const updatedAddress = {
        ...addressState,
        address: addressState.address.filter(
          (item) => item.id !== action.payload
        ),
      };
      updateStorage(updatedAddress.address);
      return updatedAddress;
    }
    case "EDIT-ADDRESS": {
      const updatedAddress = {
        ...addressState,
        address: addressState.address.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                fullName: action.payload.fullName,
                contact: action.payload.contact,
                pincode: action.payload.pincode,
                house: action.payload.house,
                area: action.payload.area,
                landmark: action.payload.landmark,
                city: action.payload.city,
                state: action.payload.state,
              }
            : item
        ),
      };
      updateStorage(updatedAddress.address);
      return updatedAddress;
    }
    case "UPDATE-FROM-LOCALSTORAGE": {
      const initalAddress = getAddress();
      return { ...addressState, address: [...initalAddress] };
    }
    default:
      return addressState;
  }
};
