export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'boxoffice',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Boxoffice Page', // menu title
            icon: 'ion-android-home', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'golfclub',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Golf Clubs', // menu title
            icon: 'ion-android-checkmark-circle', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'customer',
        data: {
          menu: {
            title: 'Customer Care',
            icon: 'ion-social-reddit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'inbox',
            data: {
              menu: {
                title: 'INBOX MESSAGE',
              }
            }
          },
          {
            path: 'customerprofile',
            data: {
              menu: {
                title: 'Customer Profile',
              }
            }
          }
        ]
      },
      {
        path: 'TCASH SERVICE',
        data: {
          menu: {
            title: 'Tcash Service',
            icon: 'ion-cash',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'tcashtransactionmanagement',
            data: {
              menu: {
                title: 'Tcash Transaction Management',
              }
            }
          },
          {
            path: 'tcashservicemanagement',
            data: {
              menu: {
                title: 'Tcash service Management',
              }
            }
          },
          {
            path: 'tcashmenutemplate',
            data: {
              menu: {
                title: 'Tcash Menu Template',
              }
            }
          },
          {
            path: 'tcashlinktemplate',
            data: {
              menu: {
                title: 'Tcash Link Template',
              }
            }
          }
        ]
      },
      {
        path: 'walletservice',
        data: {
          menu: {
            title: 'Wallet Service Management',
            icon: 'ion-bag',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'clientversion',
            data: {
              menu: {
                title: 'Client Version Management',
              }
            }
          }
        ]
      },
      {
        path: 'system',
        data: {
          menu: {
            title: 'SYSTEM',
            icon: 'ion-ios-gear',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'transactionlist',
            data: {
              menu: {
                title: 'Transaction List',
              }
            }
          },
          {
            path: 'access',
            data: {
              menu: {
                title: 'Access Control',
              }
            }
          },
          {
            path: 'adminmanagement',
            data: {
              menu: {
                title: 'Admin Management',
              }
            }
          },
          {
            path: 'adminlogin',
            data: {
              menu: {
                title: 'Admin Login History',
              }
            }
          },
          {
            path: 'notitemplate',
            data: {
              menu: {
                title: 'Notification Template',
              }
            }
          },
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2_1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
