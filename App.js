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
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.info;

    return(
        <div className = "res-card" style={{backgroundColor:"#f0f0f0"}}>
            { <img className = "res-logo" alt="res-logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/"+ cloudinaryImageId}/> }
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}stars</h4>
            <h4>₹{costForTwo}FORTWO</h4>
            <h4>{deliveryTime}minutes</h4> 
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
            "deliveryTime": 22,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-05 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                "description": "bolt!"
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
          "context": "seo-data-ade35ac2-2e60-4592-aa40-1ff46c31a1ba"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
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
          "avgRating": 4.5,
          "parentId": "630",
          "avgRatingString": "4.5",
          "totalRatingsString": "64K+",
          "sla": {
            "deliveryTime": 15,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-05 02:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                "description": "bolt!"
              },
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
                      "description": "bolt!",
                      "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                    }
                  },
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
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
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
          "context": "seo-data-ade35ac2-2e60-4592-aa40-1ff46c31a1ba"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "758322",
          "name": "Grameen Kulfi",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/23/0439d30c-a3ce-4db9-b822-ca1a1f91af68_758322 (2).jpg",
          "locality": "MICO Employees Grinirman",
          "areaName": "BTM layout",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.8,
          "veg": true,
          "parentId": "12175",
          "avgRatingString": "4.8",
          "totalRatingsString": "128",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-05 01:00:00",
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
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-ade35ac2-2e60-4592-aa40-1ff46c31a1ba"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/grameen-kulfi-mico-employees-grinirman-btm-layout-rest758322",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "639523",
          "name": "Dum Safar Biryani",
          "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
          "locality": "7th Block",
          "areaName": "DAVAR ATRIUM",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "Kebabs",
            "Tandoor",
            "Indian",
            "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "351013",
          "avgRatingString": "4.2",
          "totalRatingsString": "193",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-04 23:30:00",
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
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
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
          "context": "seo-data-ade35ac2-2e60-4592-aa40-1ff46c31a1ba"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/dum-safar-biryani-7th-block-davar-atrium-rest639523",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "390057",
          "name": "NH1 Bowls - Highway To North",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/b1e9f652-dc8d-4789-9710-6485ec06846e_390057.jpg",
          "locality": "6th Block",
          "areaName": "Koramangala",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "Punjabi",
            "Home Food"
          ],
          "avgRating": 4.7,
          "parentId": "22452",
          "avgRatingString": "4.7",
          "totalRatingsString": "1.1K+",
          "sla": {
            "deliveryTime": 15,
            "lastMileTravel": 0.8,
            "serviceability": "SERVICEABLE",
            "slaString": "10-20 mins",
            "lastMileTravelString": "0.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-03-05 02:00:00",
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
            "subHeader": "AT ₹100"
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
          "context": "seo-data-ade35ac2-2e60-4592-aa40-1ff46c31a1ba"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-6th-block-koramangala-rest390057",
          "type": "WEBLINK"
        }
      },

]




const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[3]} />
                <RestaurantCard resData={resList[5]} />   
                <RestaurantCard resData={resList[6]} />
                <RestaurantCard resData={resList[7]} />
                <RestaurantCard resData={resList[8]} />
                <RestaurantCard resData={resList[9]} />
   
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