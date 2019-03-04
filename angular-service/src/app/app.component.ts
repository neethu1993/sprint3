import { Component , OnInit} from '@angular/core';
import { TransferServiceService } from './transfer-service.service';
import { TokenStorageService } from './auth/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   unans;
   un;
   unansweredQues;
   info
   checkLoggedIn;

  ngOnInit(): void { 
    this.loaditems();
    // console.log(typeof this.trendingQues);
    // console.log(this.trendingQues);

    this.info = {
      token: this.toke.getToken(),
      email: this.toke.getUsername()
    };
    // this.putvalues();

      //Below is the JWT Token
    this.checkLoggedIn= this.info.token;

  }

  constructor(private trans:TransferServiceService,private toke: TokenStorageService){
   
  }


  loaditems(){
    this.unans=this.trans.loaditems().subscribe((data) => {
      this.unansweredQues = data;
      console.log(this.unansweredQues);
      console.log(typeof this.unansweredQues);
    });
   
  }


  title = 'homepage';

  // putvalues(){
  //   if()
  // }



  //This is unanswered questions
  // unansweredQues=[

  //   {
  //     "question": "What are some of the important concepts in Angular?",
  //     "answers": [
  //       {
  //         "answerDTO": "Some of the important concepts in angular are data binding and component interaction",
  //         "comments": [
  //           {
  //             "comment": "Can you mention other important topics ?",
  //             "timestamp": 1550166525,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "comment": "Can you mention other important topics ?",
  //             "timestamp": 1550166525,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Anushka",
  //           "emailaddress": "anushka@marvel.com",
  //           "imageurl": ""
  //         },
  //         "upvotes": 200,
  //         "downvote": 3,
  //         "views": 2000,
  //         "timestamp": 1550166527
  //       },
  //       {
  //         "answerDTO": "Directives are one of the most important concepts of angular",
  //         "comments": [
  //           {
  //             "comment": "Are directives the most difficult ones ?",
  //             "timestamp": 1550166537,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "comment": "What about reactive programming ?",
  //             "timestamp": 1550166538,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Anushka",
  //           "emailaddress": "anushka@marvel.com",
  //           "imageurl": ""
  //         },
  //         "upvotes": 200,
  //         "downvote": 3,
  //         "views": 2000,
  //         "timestamp": 1550166527
  //       }
  //     ],

  //     "userDTO": {
  //       "firstname": "Anjali",
  //       "emailaddress": "anjali@marvel.com",
  //       "imageurl": ""
  //     },
  //     "upvote": 3,
  //     "timestamp": 1550166528,
  //     "downvote": 0,
  //     "description": "iusdhf erfheri ehreoiuhreiu eh uierhf uer iue uerrier rfiuer ferfhuierhfhier fuerfhuerhfi erfhiuerf uerf ue rfuierfh iuehrfiuer rfureihfiuerf uier fiuer fiuer fiure fuierhfue iurf heiurf ieur hf",
  //     "comments": [
  //       {
  //         "comment": "Can you state the question more clearly ?",
  //         "timestamp": 1550166529,
  //         "likes": 10,
  //         "replies": [
  //           {
  //             "reply": "I think the details mentioned are enough to answerDTO the question",
  //             "likes": 3,
  //             "timestamp": 1550166530,
  //             "userDTO": {
  //               "firstname": "Akanksha",
  //               "emailaddress": "akanksha@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "reply": "Some details maybe missing",
  //             "likes": 3,
  //             "timestamp": 1550166536,
  //             "userDTO": {
  //               "firstname": "Prachi",
  //               "emailaddress": "prachi@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Antara",
  //           "emailaddress": "antara@marvel.com",
  //           "imageurl": ""
  //         }
  //       },

  //       {
  //         "comment": "I think the question is not clear",
  //         "timestamp": 1550166531,
  //         "likes": 11,
  //         "replies": [
  //           {
  //             "reply": "I think the details mentioned suffice",
  //             "likes": 3,
  //             "timestamp": 1550166532,
  //             "userDTO": {
  //               "firstname": "Shalmali",
  //               "emailaddress": "shalmali@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "reply": "Dude the question is crystal clear",
  //             "likes": 3,
  //             "timestamp": 1550166533,
  //             "userDTO": {
  //               "firstname": "Kajal",
  //               "emailaddress": "kajal@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Aarushi",
  //           "emailaddress": "aarushi@marvel.com",
  //           "imageurl": ""
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     "question": "What are some qqqof the important concepts in Angular?",
  //     "answers": [
  //       {
  //         "answerDTO": "Some of the important concepts in angular are data binding and component interaction",
  //         "comments": [
  //           {
  //             "comment": "Can you mention other important topics ?",
  //             "timestamp": 1550166525,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "comment": "Can you mention other important topics ?",
  //             "timestamp": 1550166525,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Anushka",
  //           "emailaddress": "anushka@marvel.com",
  //           "imageurl": ""
  //         },
  //         "upvotes": 200,
  //         "downvote": 3,
  //         "views": 2000,
  //         "timestamp": 1550166527
  //       },
  //       {
  //         "answerDTO": "Directives are one of the most important concepts of angular",
  //         "comments": [
  //           {
  //             "comment": "Are directives the most difficult ones ?",
  //             "timestamp": 1550166537,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "comment": "What about reactive programming ?",
  //             "timestamp": 1550166538,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Anushka",
  //           "emailaddress": "anushka@marvel.com",
  //           "imageurl": ""
  //         },
  //         "upvotes": 200,
  //         "downvote": 3,
  //         "views": 2000,
  //         "timestamp": 1550166527
  //       }
  //     ],

  //     "userDTO": {
  //       "firstname": "Anjali",
  //       "emailaddress": "anjali@marvel.com",
  //       "imageurl": ""
  //     },
  //     "upvote": 3,
  //     "timestamp": 1550166528,
  //     "downvote": 0,
  //     "description": "iudh vuidgvufhreuf vpnesfghv wusfhv wnpiefhvvius dfv w",
  //     "comments": [
  //       {
  //         "comment": "Can you state the question more clearly ?",
  //         "timestamp": 1550166529,
  //         "likes": 10,
  //         "replies": [
  //           {
  //             "reply": "I think the details mentioned are enough to answerDTO the question",
  //             "likes": 3,
  //             "timestamp": 1550166530,
  //             "userDTO": {
  //               "firstname": "Akanksha",
  //               "emailaddress": "akanksha@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "reply": "Some details maybe missing",
  //             "likes": 3,
  //             "timestamp": 1550166536,
  //             "userDTO": {
  //               "firstname": "Prachi",
  //               "emailaddress": "prachi@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Antara",
  //           "emailaddress": "antara@marvel.com",
  //           "imageurl": ""
  //         }
  //       },

  //       {
  //         "comment": "I think the question is not clear",
  //         "timestamp": 1550166531,
  //         "likes": 11,
  //         "replies": [
  //           {
  //             "reply": "I think the details mentioned suffice",
  //              "likes": 3,
  //             "timestamp": 1550166532,
  //             "userDTO": {
  //               "firstname": "Shalmali",
  //               "emailaddress": "shalmali@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "reply": "Dude the question is crystal clear",
  //             "likes": 3,
  //             "timestamp": 1550166533,
  //             "userDTO": {
  //               "firstname": "Kajal",
  //               "emailaddress": "kajal@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Aarushi",
  //           "emailaddress": "aarushi@marvel.com",
  //           "imageurl": ""
  //         }
  //       }
  //     ]
  //   }
  // ];
  //This is the list of Trending questions
  // trendingQues = [
  //   {
  //     "question": "What are some qqqof the important concepts in Angular?",
  //     "answers": [
  //       {
  //         "answerDTO": "Some of the important concepts in angular are data binding and component interaction",
  //         "comments": [
  //           {
  //             "comment": "Can you mention1 other important topics ?",
  //             "timestamp": 1550166525,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "comment": "Can you mention other important topics ?",
  //             "timestamp": 1550166525,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Anushka",
  //           "emailaddress": "anushka@marvel.com",
  //           "imageurl": ""
  //         },
  //         "upvotes": 200,
  //         "downvote": 3,
  //         "views": 2000,
  //         "timestamp": 1550166527
  //       },
  //       {
  //         "answerDTO": "Directives are one of the most important concepts of angular",
  //         "comments": [
  //           {
  //             "comment": "Are directives the most difficult ones ?",
  //             "timestamp": 1550166537,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "comment": "What about reactive programming ?",
  //             "timestamp": 1550166538,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Anushka",
  //           "emailaddress": "anushka@marvel.com",
  //           "imageurl": ""
  //         },
  //         "upvotes": 200,
  //         "downvote": 3,
  //         "views": 2000,
  //         "timestamp": 1550166527
  //       }
  //     ],

  //     "userDTO": {
  //       "firstname": "Anjali",
  //       "emailaddress": "anjali@marvel.com",
  //       "imageurl": ""
  //     },
  //     "upvote": 3,
  //     "timestamp": 1550166528,
  //     "downvote": 0,
  //     "description": "Loresdk vd kndf v joiro iohoijeoi 0gieh ue vuehueieuhe rhi i i jibuh bk jb i j jhb ruhrc 45giu ug 4tgugiuhgtgniu gtgtgiut guthg uirhg iruh rtughiruhgrgh ig tgiurhgrug iurgh iurh viurg hriug rtugriutghiugh hiurtghiurg itugh htg guihg iutg",
  //     "comments": [
  //       {
  //         "comment": "Can you state the question more clearly ?",
  //         "timestamp": 1550166529,
  //         "likes": 10,
  //         "replies": [
  //           {
  //             "reply": "I think the details mentioned are enough to answerDTO the question",
  //             "likes": 3,
  //             "timestamp": 1550166530,
  //             "userDTO": {
  //               "firstname": "Akanksha",
  //               "emailaddress": "akanksha@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "reply": "Some details maybe missing",
  //             "likes": 3,
  //             "timestamp": 1550166536,
  //             "userDTO": {
  //               "firstname": "Prachi",
  //               "emailaddress": "prachi@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Antara",
  //           "emailaddress": "antara@marvel.com",
  //           "imageurl": ""
  //         }
  //       },

  //       {
  //         "comment": "I think the question is not clear",
  //         "timestamp": 1550166531,
  //         "likes": 11,
  //         "replies": [
  //           {
  //             "reply": "I think the details mentioned suffice",
  //             "likes": 3,
  //             "timestamp": 1550166532,
  //             "userDTO": {
  //               "firstname": "Shalmali",
  //               "emailaddress": "shalmali@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "reply": "Dude the question is crystal clear",
  //             "likes": 3,
  //             "timestamp": 1550166533,
  //             "userDTO": {
  //               "firstname": "Kajal",
  //               "emailaddress": "kajal@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Aarushi",
  //           "emailaddress": "aarushi@marvel.com",
  //           "imageurl": ""
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     "question": "What are some of the important concepts in Angular?",
  //     "answers": [
  //       {
  //         "answerDTO": "Some of the important concepts in angular are data binding and component interaction",
  //         "comments": [
  //           {
  //             "comment": "Can you mention other important topics ?",
  //             "timestamp": 1550166525,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "comment": "Can you mention other important topics ?",
  //             "timestamp": 1550166525,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Anushka",
  //           "emailaddress": "anushka@marvel.com",
  //           "imageurl": ""
  //         },
  //         "upvotes": 200,
  //         "downvote": 3,
  //         "views": 2000,
  //         "timestamp": 1550166527
  //       },
  //       {
  //         "answerDTO": "Directives are one of the most important concepts of angular",
  //         "comments": [
  //           {
  //             "comment": "Are directives the most difficult ones ?",
  //             "timestamp": 1550166537,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "comment": "What about reactive programming ?",
  //             "timestamp": 1550166538,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Anushka",
  //           "emailaddress": "anushka@marvel.com",
  //           "imageurl": ""
  //         },
  //         "upvotes": 200,
  //         "downvote": 3,
  //         "views": 2000,
  //         "timestamp": 1550166527
  //       }
  //     ],

  //     "userDTO": {
  //       "firstname": "Anjali",
  //       "emailaddress": "anjali@marvel.com",
  //       "imageurl": ""
  //     },
  //     "upvote": 3,
  //     "timestamp": 1550166528,
  //     "downvote": 0,
  //     "description": "Loresdk vd kndf v joiro iohoijeoi 0gieh ue vuehueieuhe rhi i i jibuh bk jb i j jhb ruhrc 45giu ug 4tgugiuhgtgniu gtgtgiut guthg uirhg iruh rtughiruhgrgh ig tgiurhgrug iurgh iurh viurg hriug rtugriutghiugh hiurtghiurg itugh htg guihg iutg",
  //     "comments": [
  //       {
  //         "comment": "Can you state the question more clearly ?",
  //         "timestamp": 1550166529,
  //         "likes": 10,
  //         "replies": [
  //           {
  //             "reply": "I think the details mentioned are enough to answerDTO the question",
  //             "likes": 3,
  //             "timestamp": 1550166530,
  //             "userDTO": {
  //               "firstname": "Akanksha",
  //               "emailaddress": "akanksha@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "reply": "Some details maybe missing",
  //             "likes": 3,
  //             "timestamp": 1550166536,
  //             "userDTO": {
  //               "firstname": "Prachi",
  //               "emailaddress": "prachi@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Antara",
  //           "emailaddress": "antara@marvel.com",
  //           "imageurl": ""
  //         }
  //       },

  //       {
  //         "comment": "I think the question is not clear",
  //         "timestamp": 1550166531,
  //         "likes": 11,
  //         "replies": [
  //           {
  //             "reply": "I think the details mentioned suffice",
  //             "likes": 3,
  //             "timestamp": 1550166532,
  //             "userDTO": {
  //               "firstname": "Shalmali",
  //               "emailaddress": "shalmali@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "reply": "Dude the question is crystal clear",
  //             "likes": 3,
  //             "timestamp": 1550166533,
  //             "userDTO": {
  //               "firstname": "Kajal",
  //               "emailaddress": "kajal@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Aarushi",
  //           "emailaddress": "aarushi@marvel.com",
  //           "imageurl": ""
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     "question": "What are some qqqof the important concepts in Angular?",
  //     "answers": [
  //       {
  //         "answerDTO": "Some of the important concepts in angular are data binding and component interaction",
  //         "comments": [
  //           {
  //             "comment": "Can you mention other important topics ?",
  //             "timestamp": 1550166525,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "comment": "Can you mention other important topics ?",
  //             "timestamp": 1550166525,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Anushka",
  //           "emailaddress": "anushka@marvel.com",
  //           "imageurl": ""
  //         },
  //         "upvotes": 200,
  //         "downvote": 3,
  //         "views": 2000,
  //         "timestamp": 1550166527
  //       },
  //       {
  //         "answerDTO": "Directives are one of the most important concepts of angular",
  //         "comments": [
  //           {
  //             "comment": "Are directives the most difficult ones ?",
  //             "timestamp": 1550166537,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "comment": "What about reactive programming ?",
  //             "timestamp": 1550166538,
  //             "likes": 10,
  //             "replies": [
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               },
  //               {
  //                 "reply": "Why don't you google ?",
  //                 "likes": 3,
  //                 "timestamp": 1550166526,
  //                 "userDTO": {
  //                   "firstname": "Akanksha",
  //                   "emailaddress": "akanksha@marvel.com",
  //                   "imageurl": ""
  //                 }
  //               }
  //             ],
  //             "userDTO": {
  //               "firstname": "Antara",
  //               "emailaddress": "antara@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Anushka",
  //           "emailaddress": "anushka@marvel.com",
  //           "imageurl": ""
  //         },
  //         "upvotes": 200,
  //         "downvote": 3,
  //         "views": 2000,
  //         "timestamp": 1550166527
  //       }
  //     ],

  //     "userDTO": {
  //       "firstname": "Anjali",
  //       "emailaddress": "anjali@marvel.com",
  //       "imageurl": ""
  //     },
  //     "upvote": 3,
  //     "timestamp": 1550166528,
  //     "downvote": 0,
  //     "description": "Loresdk vd kndf v joiro iohoijeoi 0gieh ue vuehueieuhe rhi i i jibuh bk jb i j jhb ruhrc 45giu ug 4tgugiuhgtgniu gtgtgiut guthg uirhg iruh rtughiruhgrgh ig tgiurhgrug iurgh iurh viurg hriug rtugriutghiugh hiurtghiurg itugh htg guihg iutg",
  //     "comments": [
  //       {
  //         "comment": "Can you state the question more clearly ?",
  //         "timestamp": 1550166529,
  //         "likes": 10,
  //         "replies": [
  //           {
  //             "reply": "I think the details mentioned are enough to answerDTO the question",
  //             "likes": 3,
  //             "timestamp": 1550166530,
  //             "userDTO": {
  //               "firstname": "Akanksha",
  //               "emailaddress": "akanksha@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "reply": "Some details maybe missing",
  //             "likes": 3,
  //             "timestamp": 1550166536,
  //             "userDTO": {
  //               "firstname": "Prachi",
  //               "emailaddress": "prachi@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Antara",
  //           "emailaddress": "antara@marvel.com",
  //           "imageurl": ""
  //         }
  //       },

  //       {
  //         "comment": "I think the question is not clear",
  //         "timestamp": 1550166531,
  //         "likes": 11,
  //         "replies": [
  //           {
  //             "reply": "I think the details mentioned suffice",
  //             "likes": 3,
  //             "timestamp": 1550166532,
  //             "userDTO": {
  //               "firstname": "Shalmali",
  //               "emailaddress": "shalmali@marvel.com",
  //               "imageurl": ""
  //             }
  //           },
  //           {
  //             "reply": "Dude the question is crystal clear",
  //             "likes": 3,
  //             "timestamp": 1550166533,
  //             "userDTO": {
  //               "firstname": "Kajal",
  //               "emailaddress": "kajal@marvel.com",
  //               "imageurl": ""
  //             }
  //           }
  //         ],
  //         "userDTO": {
  //           "firstname": "Aarushi",
  //           "emailaddress": "aarushi@marvel.com",
  //           "imageurl": ""
  //         }
  //       }
  //     ]
  //   }
  // ]

}
