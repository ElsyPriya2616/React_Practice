import React from "react";
import ReactDOM from "react-dom/client";

//JSX - jsx is HTML/XML like Syntax but not html/XML in js

//Creating React element using JSX
//const jsxHeading = <h1 id = "heading"> Namaste React using JSX</h1>;

//console.log(jsxHeading);

//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading); 

//React Element

//const heading = (<h1 className="head" tabIndex="5">Namaste React using JSX</h1>);

//React Functional Component

//const HeadingComponent =()=>{
    //return<h1>Namaste React Functional component</h1>; 
//}
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadingComponent/>);

//React component inside component
//const title = (<h1 className="head" tabIndex="5">Namaste React using JSX</h1>);

//const HeadingComponent =()=>{
  //  return<h1>Namaste React Functional component</h1>;
//}


//FOOD ORDERING APP PLANNING:
const Header = () => {
    return(
        <div className = "header">
        <div className = "logo-container">
             <img  
                className = "logo"
                 src = {"https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2&industry=COMPANY+NAME"}   
            /> 
        </div>
        <div className = "nav-items">
            <ul> 
                <li> Home </li>
                <li> About Us </li>
                <li> Contact Us </li>
                <li> Cart </li>
            </ul>
        </div>
    </div>
    )
}



const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla,deliveryTime} = resData?.info || {};

    return(
        <div className = "res-card" style={{backgroundColor:"#f0f0f0"}}>
            { <img className = "res-logo" alt="res-logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/"+ cloudinaryImageId}/> }
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime}minutes</h4> 
        </div>
    )
}

const resList=[{ 
        "info": {
                      "id": "671928",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
                      "locality": "7th Block",
                      "areaName": "Koramangla",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.3,
                      "parentId": "547",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.1K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "10576",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
                      "locality": "6th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "21K+",
                      "sla": {
                        "deliveryTime": 53,
                        "lastMileTravel": 0.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "0.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.6",
                          "ratingCount": "3.5K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "393840",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                      "locality": "Chikka Lakshmaiah Layout",
                      "areaName": "Adugodi",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "61955",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5.5K+",
                      "sla": {
                        "deliveryTime": 44,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chinese-wok-chikka-lakshmaiah-layout-adugodi-rest393840",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "580891",
                      "name": "Mad Over Donuts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/24/9ccee5eb-58d8-47dc-b3b1-4b956e44035c_580891.jpg",
                      "locality": "The Nexus Mall",
                      "areaName": "Koramangala",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Sweets",
                        "Bakery"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "611",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "504",
                      "sla": {
                        "deliveryTime": 46,
                        "lastMileTravel": 2.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "2.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/mad-over-donuts-the-nexus-mall-koramangala-rest580891",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23678",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
                      "locality": "5th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "64K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 02:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹179"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5934",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/ecb98b9d-2ce4-4cee-a7e3-10e861bdebb7_5934.jpg",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "100K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 06:55:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "4.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "65797",
                      "name": "Leon's - Burgers & Wings (Leon Grill)",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "American",
                        "Snacks",
                        "Turkish",
                        "Portuguese",
                        "Continental"
                      ],
                      "avgRating": 4.5,
                      "parentId": "371281",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "55K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹200 OFF",
                        "subHeader": "ABOVE ₹649",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.5",
                          "ratingCount": "4.7K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "186080",
                      "name": "The Biryani Life",
                      "cloudinaryImageId": "r6hfgz7icl2rwdeimhjl",
                      "locality": "NGK Complex",
                      "areaName": "BTM 1st Stage",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Mughlai",
                        "Lucknowi",
                        "Hyderabadi",
                        "Kebabs",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "parentId": "8496",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "1.7K+",
                      "sla": {
                        "deliveryTime": 39,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-13 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹159"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/the-biryani-life-ngk-complex-btm-1st-stage-rest186080",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "27811",
                      "name": "Natural Ice Cream",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/8/0ca51204-1213-4593-a653-7f3cf64e9160_27811.JPG",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.8,
                      "parentId": "2093",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "19K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "ABOVE ₹1200",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.5",
                          "ratingCount": "4.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/natural-ice-cream-koramangala-rest27811",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "676",
                      "name": "Chai Point",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/59f228f3-d214-4865-81fb-6e8b23734e02_676.jpg",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "1607",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "45K+",
                      "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-13 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "137"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chai-point-koramangala-rest676",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "426776",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/6/ef26de8c-72a5-494b-9662-e4c1f51e26bc_426776.jpg",
                      "locality": "7th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "parentId": "1040",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "5.9K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-13 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹49"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/theobroma-7th-block-koramangala-rest426776",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "656392",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
                      "locality": "1st Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "3.5K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹60"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "35307",
                      "name": "Chaat Street Express",
                      "cloudinaryImageId": "aqenclsr4kwkbzomahyx",
                      "locality": "6th Block",
                      "areaName": "Koramangala",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Snacks",
                        "Chaat",
                        "Street Food",
                        "Fast Food"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "231468",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "7.3K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-13 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹44"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chaat-street-express-6th-block-koramangala-rest35307",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "733092",
                      "name": "Caterspoint",
                      "cloudinaryImageId": "be3c347a3ff9e54393083264ebb9228f",
                      "locality": "Hosur Road",
                      "areaName": "HSR",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Salads",
                        "Healthy food",
                        "Snacks",
                        "pastas",
                        "Lebanese",
                        "Mexican",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "11011",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.8K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/caterspoint-hosur-road-hsr-rest733092",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "737964",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/2f641b2b-aafb-4391-9bfb-c8469889f34e_737964.JPG",
                      "locality": "KORAMANGALA LAYOUT EXTENSION",
                      "areaName": "KORAMANGALA",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Tibetan",
                        "Healthy Food",
                        "Asian",
                        "Chinese",
                        "Snacks",
                        "Continental",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "parentId": "1776",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "836",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 0.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "0.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/wow-momo-layout-extension-koramangala-rest737964",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "780133",
                      "name": "LeanCrust Pizza- ThinCrust Experts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/521ae8ec-94f4-4e78-b37c-8477a42783a2_780133.jpg",
                      "locality": "1ST MAIN, JAKKASANDRA",
                      "areaName": "KORAMANGALA",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "11216",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "207",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-1st-main-jakkasandra-koramangala-rest780133",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "780134",
                      "name": "MOJO Pizza - 2X Toppings",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/3d4874b6-f193-4325-b64c-bceaf4b383c2_780134.jpg",
                      "locality": "1ST MAIN, JAKKASANDRA",
                      "areaName": "KORAMANGALA",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "11329",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "394",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-1st-main-jakkasandra-koramangala-rest780134",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "667571",
                      "name": "Popeyes",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/11/5e24e79a-fdf5-4c6c-b200-64aa6c40e2b4_667571.jpg",
                      "locality": "hosur Road Lakkasandra",
                      "areaName": "Koramangala",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.1,
                      "parentId": "397044",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "2.7K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-13 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "3.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/popeyes-hosur-road-lakkasandra-koramangala-rest667571",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "238806",
                      "name": "Starbucks Coffee",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/10/fa57b553-ce06-4a95-8b68-ba072ba1feab_238806.JPG",
                      "locality": "Koramangala",
                      "areaName": "Koramangala",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Bakery",
                        "Ice Cream"
                      ],
                      "avgRating": 4.3,
                      "parentId": "195515",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.2K+",
                      "sla": {
                        "deliveryTime": 21,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-13 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹138"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "797"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/starbucks-coffee-koramangala-rest238806",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "263485",
                      "name": "Chaayos Chai+Snacks=Relax",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_263485.JPG",
                      "locality": "Kormangala 8th Block",
                      "areaName": "Kormangala",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets"
                      ],
                      "avgRating": 4.5,
                      "parentId": "281782",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "4.8K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 0.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "0.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-03-14 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹199"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-72e30e17-7faa-4579-bace-75e869cc61c2"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-8th-block-kormangala-rest263485",
                      "type": "WEBLINK"
                    }
                  }
                ]




const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant)=>(
                  <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))} 
                
   
            </div>
        </div>
    )
    
}

const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
            <Body/>
        </div>  
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)   