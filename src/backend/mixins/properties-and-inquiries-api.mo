import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/properties-and-inquiries";
import CommonTypes "../types/common";
import PropLib "../lib/properties-and-inquiries";

mixin (
  properties : List.List<Types.Property>,
  inquiries : List.List<Types.Inquiry>,
  state : { var nextInquiryId : CommonTypes.InquiryId }
) {
  public query func getProperties() : async [Types.Property] {
    PropLib.getAllProperties(properties);
  };

  public func submitInquiry(input : Types.InquiryInput) : async CommonTypes.InquiryId {
    PropLib.submitInquiry(inquiries, state, input);
  };
};
