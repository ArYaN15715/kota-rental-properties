import List "mo:core/List";
import Types "types/properties-and-inquiries";
import CommonTypes "types/common";
import PropertiesApi "mixins/properties-and-inquiries-api";

import PropLib "lib/properties-and-inquiries";

actor {
  let properties = PropLib.initProperties();
  let inquiries = List.empty<Types.Inquiry>();
  let state = { var nextInquiryId : CommonTypes.InquiryId = 0 };

  include PropertiesApi(properties, inquiries, state);
};

