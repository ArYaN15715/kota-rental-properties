import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/properties-and-inquiries";
import CommonTypes "../types/common";

module {
  public func initProperties() : List.List<Types.Property> {
    let props = List.empty<Types.Property>();
    props.add({
      id = 1;
      title = "Furnished Room Near Allen Coaching";
      price = 6500;
      location = "Talwandi";
      propertyType = "Room";
      furnished = true;
      studentFriendly = true;
      nearbyCoaching = ["Allen Career Institute", "Resonance"];
      amenities = ["WiFi", "Attached Bathroom", "24x7 Water", "Security"];
      verified = true;
      imageUrl = "";
      description = "Cozy furnished room in the heart of Talwandi, walking distance from Allen. Ideal for JEE/NEET aspirants.";
    });
    props.add({
      id = 2;
      title = "2BHK Flat for Families - Vigyan Nagar";
      price = 14000;
      location = "Vigyan Nagar";
      propertyType = "Flat";
      furnished = true;
      studentFriendly = false;
      nearbyCoaching = [];
      amenities = ["WiFi", "AC", "Kitchen", "Attached Bathroom", "24x7 Water", "Parking", "Security"];
      verified = true;
      imageUrl = "";
      description = "Spacious 2BHK flat in premium Vigyan Nagar locality. Perfect for families and working professionals.";
    });
    props.add({
      id = 3;
      title = "PG for Boys Near Resonance";
      price = 5000;
      location = "Rajeev Gandhi Nagar";
      propertyType = "PG";
      furnished = true;
      studentFriendly = true;
      nearbyCoaching = ["Resonance", "FIITJEE"];
      amenities = ["WiFi", "Meals Included", "24x7 Water", "Security", "Laundry"];
      verified = true;
      imageUrl = "";
      description = "Affordable boys PG with homely meals. Located close to Resonance coaching institute in RGN area.";
    });
    props.add({
      id = 4;
      title = "Student Hostel - Budget Accommodation";
      price = 4000;
      location = "Nayapura";
      propertyType = "Hostel";
      furnished = true;
      studentFriendly = true;
      nearbyCoaching = ["Bansal Classes", "Allen Career Institute"];
      amenities = ["WiFi", "Meals Included", "24x7 Water", "Security", "Reading Room"];
      verified = true;
      imageUrl = "";
      description = "Safe and affordable hostel for competitive exam students. Study room and daily meals available.";
    });
    props.add({
      id = 5;
      title = "Premium 3BHK Apartment - IPIA";
      price = 22000;
      location = "IPIA";
      propertyType = "Apartment";
      furnished = true;
      studentFriendly = false;
      nearbyCoaching = [];
      amenities = ["WiFi", "AC", "Kitchen", "Attached Bathroom", "Gym", "Lift", "24x7 Water", "Parking", "Security"];
      verified = true;
      imageUrl = "";
      description = "Luxurious 3BHK apartment in IPIA industrial area. Ideal for senior professionals and well-off families.";
    });
    props.add({
      id = 6;
      title = "Unfurnished Room Near Bansal Classes";
      price = 5500;
      location = "Mahaveer Nagar";
      propertyType = "Room";
      furnished = false;
      studentFriendly = true;
      nearbyCoaching = ["Bansal Classes", "Vibrant Academy"];
      amenities = ["24x7 Water", "Security", "Electricity Backup"];
      verified = false;
      imageUrl = "";
      description = "Simple unfurnished room in a quiet locality close to Bansal Classes. Budget-friendly for students.";
    });
    props.add({
      id = 7;
      title = "Girls PG with Meals - Talwandi";
      price = 5500;
      location = "Talwandi";
      propertyType = "PG";
      furnished = true;
      studentFriendly = true;
      nearbyCoaching = ["Allen Career Institute", "Aakash Institute"];
      amenities = ["WiFi", "Meals Included", "Attached Bathroom", "24x7 Water", "Security", "CCTV"];
      verified = true;
      imageUrl = "";
      description = "Safe and comfortable PG exclusively for girls. Highly secure with 24/7 warden and CCTV surveillance.";
    });
    props.add({
      id = 8;
      title = "1BHK Flat for Rent - Vigyan Nagar";
      price = 9500;
      location = "Vigyan Nagar";
      propertyType = "Flat";
      furnished = false;
      studentFriendly = false;
      nearbyCoaching = [];
      amenities = ["Kitchen", "24x7 Water", "Parking", "Security"];
      verified = false;
      imageUrl = "";
      description = "Unfurnished 1BHK flat in Vigyan Nagar for working professionals or small families. Good connectivity.";
    });
    props;
  };

  public func getAllProperties(properties : List.List<Types.Property>) : [Types.Property] {
    properties.toArray();
  };

  public func submitInquiry(
    inquiries : List.List<Types.Inquiry>,
    state : { var nextInquiryId : CommonTypes.InquiryId },
    input : Types.InquiryInput
  ) : CommonTypes.InquiryId {
    let id = state.nextInquiryId + 1;
    state.nextInquiryId := id;
    let inquiry : Types.Inquiry = {
      id;
      name = input.name;
      phone = input.phone;
      propertyType = input.propertyType;
      message = input.message;
      timestamp = Time.now();
    };
    inquiries.add(inquiry);
    id;
  };
};
