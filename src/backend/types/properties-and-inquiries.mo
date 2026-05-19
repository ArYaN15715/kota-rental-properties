import Types "common";

module {
  public type Property = {
    id : Types.PropertyId;
    title : Text;
    price : Nat;
    location : Text;
    propertyType : Text;
    furnished : Bool;
    studentFriendly : Bool;
    nearbyCoaching : [Text];
    amenities : [Text];
    verified : Bool;
    imageUrl : Text;
    description : Text;
  };

  public type Inquiry = {
    id : Types.InquiryId;
    name : Text;
    phone : Text;
    propertyType : Text;
    message : Text;
    timestamp : Types.Timestamp;
  };

  public type InquiryInput = {
    name : Text;
    phone : Text;
    propertyType : Text;
    message : Text;
  };
};
