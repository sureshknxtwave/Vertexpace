// src/data/collegesData.ts

// Type Definitions
export interface Program {
  name: string;
  degree: string;
  duration: string;
  researchAreas?: string[];
}



export interface Subject {
  name: string;
  details: string;
}

export interface Programs {
  undergraduate?: Program[];
  postgraduate?: Program[];
  doctoral?: Program[];
  subjects?: Subject[]; 
  diploma?: Diploma[]; // Added for Science & Humanities
}

export interface Diploma {
  name: string;
  degree: string;
  duration: string;
}


export interface School {
  name: string;
  description: string;
  programs: Programs;
}

export interface Highlights {
  established: number;
  ranking: string;
  campus: string;
  placement: string;
  facilities: string[];
}

export interface AdmissionProcess {
  entranceExams: string[];
  applicationPeriod: string;
  requiredDocuments: string[];
}

export interface Contact {
  address: string;
  phone: string;
  email: string;
  website: string;
}

export interface College {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  description: string;
  schools: School[];
  highlights: Highlights;
  admissionProcess: AdmissionProcess;
  contact: Contact;
}


// College Data
export const colleges: College[] = [
  {
    id: 1,
    name: "BMS College Of Engineering",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/bms.png"),
    description: "BMSCE is the first private sector initiative in engineering education in India. Over the past 74 years of its illustrious existence, the institution has produced more than 40,000 engineers/leaders who have enriched the world through their immense contributions for mankind. Started with only 03 undergraduate courses, BMSCE today offers 13 Undergraduate & 16 Postgraduate courses both in conventional and emerging areas. 14 of its Departments are recognized as Research Centers offering PhD/M.Sc (Engineering by Research) degrees in Science, Engineering and Management. The College has been effectively practicing outcome based education. The College has one of the largest student populations amongst engineering colleges in Karnataka.",
    
    schools: [
      {
        name: "Department of Engineering",
        description : "BMSCE is the first private sector initiative in engineering education in India. Over the past 74 years of its illustrious existence, the institution has produced more than 40,000 engineers/leaders who have enriched the world through their immense contributions for mankind. Started with only 03 undergraduate courses, BMSCE today offers 13 Undergraduate & 16 Postgraduate courses both in conventional and emerging areas. ",
        programs: {
          undergraduate: [
            {
              name: "Civil Engineering",
              degree: "B.E",
              duration: "4 years"
            },
            {
              name: "Mechanical Engineering",
              degree: "B.E",
              duration: "4 years"
            },
            {
              name: "Electrical & Electronics Engineering",
              degree: "B.E",
              duration: "4 years"
            },
            {
              name: "Electronics & Communication Engineering",
              degree: "B.E",
              duration: "4 years"
            },
            {
              name: "Computer Science Engineering",
              degree: "B.E",
              duration: "4 years"
            },
            {
              name: "Information Science Engineering",
              degree: "B.E",
              duration: "4 years"
            }
          ],
          postgraduate: [
            {
              name: "Machine Design",
              degree: "M.Tech",
              duration: "2 years"
            },
            {
              name: "Digital Electronics",
              degree: "M.Tech",
              duration: "2 years"
            }
          ],
          doctoral: [
            {
              name: "PhD in Engineering",
              duration: "3-5 years",
              researchAreas: [
                "Machine Learning",
                "IoT",
                "VLSI Design"
              ],
              degree: ""
            }
          ]
        }
      },
      {
        name: "Management Studies and Research Center",
        description:"The Department of Management Studies & Research Centre is accredited by NBA (National Board of Accreditation). It was started in the year 1992 with an objective of imparting quality Management Education. With an initial intake of 60, the Department increased its intake to 120 in the year 2011. It was approved as a Research Centre in the year 2004 by VTU, Belgaum. The Department has been striving to offer quality Management Education through a team of qualified and experienced faculty members. It also offers various value added programmes such as guest lectures, seminars, workshops, case based learning, course assignments, meet the CEO series, industrial visits etc., to prepare the students to face the challenges in the corporate world. The program focuses on holistic development of students in addition to instilling excellent managerial skills and leadership qualities, which are essential to succeed in a globalized economy. The students also get an experience in organizing a Management Event through ‘QUEST’ which is an inter-collegiate event organized by the department. The International Conference organized by the department gives the students an opportunity to do research & publish papers. The Department has an exclusive placement cell to handle training needs of the students, project and final placements.The School of Law offers Undergraduate, Postgraduate and Doctoral programmes in law as per the guidelines of the Bar Council of India and the University Grants Commission.  It has a flexible curriculum offering several options in different areas of specialization. It is devised keeping in mind the requirements of legal profession and academia.The programmes offered at the School of Law incorporate a number of special opportunities such as internships, clinical programme, supervisory research and writing. In order to promote interaction between students and legal professionals, seminars, guest lectures and workshops are conducted on various subjects of law at regular intervals. In addition to the mandatory courses spanning across a ten semester programme, the School of Law has also introduced numerous other value-added courses and programmes for the benefit of students.",
        
          "programs": {
            "undergraduate": [
              {
                "name": "",
                "degree": "",
                "duration": ""
              },
              {
                "name": "",
                "degree": "",
                "duration": ""
              },
              {
                "name": "",
                "degree": "",
                "duration": ""
              }
            ],
            "postgraduate": [
              {
                "name": "",
                "degree": "",
                "duration": ""
              }
            ]
          }
        
        
      },
      {
        name: "Mathematics Department",
        description:"The department was established in the year 1946 to teach mathematics to the students of Civil, Mechanical and Electrical Engineering branches. The Department of Mathematics has faculty strength of 23 members (5 Professors, 1 Associate Professors and 17 Assistant Professors). Eighteen of them have doctoral degree and Five are pursuing their Ph.D. program. The department offers courses for both UG and PG Programs. The department is recognized as one of its research centres by the VTU during 2004. Five research scholars are awarded Ph.D. degree and currently Fifteen persons are perusing part time Ph.D. program. The thrust areas of research of the department include Fluid Mechanics, Mathematical modelling, Integral transforms, Number theory and Graph theory.",
        "programs": {
            "undergraduate": [
              {
                "name": "",
                "degree": "",
                "duration": ""
              },
              {
                "name": "",
                "degree": "",
                "duration": ""
              },
              {
                "name": "",
                "degree": "",
                "duration": ""
              }
            ],
            "postgraduate": [
              {
                "name": "",
                "degree": "",
                "duration": ""
              }
            ]
          }
      },
      {
        name: "Physics Department",
        description:"The Physics Department at BMS College of Engineering was established in 1946. The vision of the department is to be a dynamic, inclusive and competitive Centre of excellence in teaching, learning and research in Physics to ensure that the technical needs of students are addressed. The Department has well qualified, experienced and highly motivated faculties. The faculties of the Department teach Engineering Physics course for I year B E students. Department faculties are involved in research and consultancy activities. They have received funding for conducting research from various external funding agencies such as DST, VGST, BARC etc. The department is VTU recognized research Centre since 2011.",
        "programs": {
          "undergraduate": [
            {
              "name": "",
              "degree": "",
              "duration": ""
            },
            {
              "name": "",
              "degree": "",
              "duration": ""
            },
            {
              "name": "",
              "degree": "",
              "duration": ""
            }
          ],
          "postgraduate": [
            {
              "name": "",
              "degree": "",
              "duration": ""
            }
          ]
        }
      },
      {
        name: "Chemistry Department",
        description:"The chemistry department is one of the oldest departments of B.M.S. College of Engineering and was established in the year 1946. The department offers Engineering Chemistry for I/II sem B. E. and Materials Chemistry and Applications courses for III sem B. E. students in Chemical Engineering. In addition to regular core courses department is also offering four Institutional elective courses for VII & VIII semester B. E. students. The department has well qualified, experienced and highly motivated faculty members. The department is a recognized research center by Visvesvaraya Technological University (VTU) since 2011. Apart from regular teaching, the faculties are involved in research and consultancy activities. Many faculties are recognized as research supervisors at VTU and Mangalore University. The department is running several externally funded projects from DST-SERB and VGST with more than one crore research grant money. Moreover, faculties have published many research papers in reputed peer-reviewed journals as well as presented their work in several national and international conferences. One of the faculty has written a book for UG students.",
        "programs": {
          "undergraduate": [
            {
              "name": "",
              "degree": "",
              "duration": ""
            },
            {
              "name": "",
              "degree": "",
              "duration": ""
            },
            {
              "name": "",
              "degree": "",
              "duration": ""
            }
          ],
          "postgraduate": [
            {
              "name": "",
              "degree": "",
              "duration": ""
            }
          ]
        }
      }

    ],
    
    highlights: {
      established: 1946,
      ranking: "NAAC A++ Grade",
      campus: "15 acres",
      placement: "95% placement rate",
      facilities: [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    
    admissionProcess: {
      entranceExams: ["KCET", "COMEDK", "JEE Main"],
      applicationPeriod: "February - July",
      requiredDocuments: [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    
    contact: {
      address: "Bull Temple Road, Basavanagudi, Bangalore - 560019",
      phone: "+91-80-26622130",
      email: "info@bmsce.ac.in",
      website: "www.bmsce.ac.in"
    }
  },
  {
    id: 2,
    name: "Christ University",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/7.jpg"),
    description: "CHRIST (Deemed to be University) was established as ‘Christ College’ in 1969. It undertook path-breaking initiatives in Indian higher education with the introduction of innovative and modern curricula, insistence on academic discipline, imparting of Holistic Education and adoption of global higher education practices with the support of creative and dedicated staff.” The multi-disciplinary University which focuses on teaching research and service offers Bachelor, Master and Doctoral programmes in humanities, social sciences, sciences, commerce, management, engineering, architecture, education, and law to about 25000 students. The University offers its programmes at three campus locations in Bangalore in Karnataka; and in Pune Lavasa in Maharashtra and Delhi NCR.",
    
    schools: [
      {
        name: "School of Architecture",
        description : "Since its inception in the year 2017, the School of Architecture has evolved its academic programs with robust and rigorous curricula. The programs are designed to develop skills, creative and critical thinking while fostering values of empathy and community engagement. Approved by the Council of Architecture New Delhi and AICTE, the school offers a Bachelor’s Degree Program in Architecture (B Arch) and Master’s Degree Program in Architecture (M Arch). The curriculum is built upon three core principles – the teaching andragogy of experiential learning, service through outreach programs, along with ‘Studio on Wheels’, a unique travel based studio program.",
        programs: {
          undergraduate: [
            {
              name: "Bachelor of Architecture(BArch)",
              degree: "",
              duration: ""
            },
            
            
          ],
          postgraduate: [
            {
              name: "Master Of Architecture(MArch)",
              degree: "",
              duration: ""
            },
            {
              name: "Post Graduate Diploma in Research Methodology(PGDR)",
              degree: "",
              duration: ""
            }
          ],
          doctoral: [
            {
              name: "Doctor of Philosophy(PhD) in Architecture",
              duration: "",
              researchAreas: [
                
              ],
              degree: ""
            }
          ]
        }
      },
      {
        name: "School of Law",
        description:"School of Law, Christ University (SLCU), Bangalore, is a part of Christ University, Bangalore, which was founded and is administered by Carmelites of Mary Immaculate (CMI). CMI, the first indigenous Catholic religious congregation of India with a membership of 2000, renders its service to humanity in educational, social, healthcare and other activities. The School of Law offers Undergraduate, Postgraduate and Doctoral programmes in law as per the guidelines of the Bar Council of India and the University Grants Commission.  It has a flexible curriculum offering several options in different areas of specialization. It is devised keeping in mind the requirements of legal profession and academia.The programmes offered at the School of Law incorporate a number of special opportunities such as internships, clinical programme, supervisory research and writing. In order to promote interaction between students and legal professionals, seminars, guest lectures and workshops are conducted on various subjects of law at regular intervals. In addition to the mandatory courses spanning across a ten semester programme, the School of Law has also introduced numerous other value-added courses and programmes for the benefit of students.",
        
          "programs": {
            "undergraduate": [
              {
                "name": "Bachelor of Law(BA LLB)(Honours)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelor of Law(BA LLB)(Honours)(Delhi NCR Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelor of Law(BA LLB)(Honours)(Pune Lavasa Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelor of Law(BBA LLB)(Honours)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelor of Law(BBA LLB)(Honours)(Delhi NCR Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelor of Law(BBA LLB)(Honours)( Pune Lavasa Off Campus)",
                "degree": "",
                "duration": ""
              }
            ],
            "postgraduate": [
              {
                "name": "Master Of Law(LLM) Constitutional and Administrative Law",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master Of Law(LLM) Constitutional and Administrative Law(Delhi NCR Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master Of Law(LLM) Corporate and Commercial Law",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master Of Law(LLM) Corporate and Commercial Law(Pune Lavasa Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master Of Law(LLM) Corporate and Commercial Law(Delhi NCR Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master Of Law(LLM) Intellectual Property and Trade Law",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master Of Law(LLM) Intellectual Property and Trade Law(Pune Lavasa Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master Of Law(LLM) Intellectual Property and Trade Law(Delhi NCR  Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Post Graduate Diploma In Research Methodology(PGDR)",
                "degree": "",
                "duration": ""
              }
            ],
             doctoral: [
            {
              name: "Doctor Of Philosophy(PhD) in Law",
              duration: "",
              researchAreas: [
                
              ],
              degree: ""
            },
            {
              name: "Doctor Of Philosophy(PhD) in Law(Pune Lavasa Off Campus)",
              duration: "",
              researchAreas: [
                
              ],
              degree: ""
            },
            {
              name: "Doctor Of Philosophy(PhD) in Law(Delhi NCR Off Campus)",
              duration: "",
              researchAreas: [
                
              ],
              degree: ""
            }
          ]
          }
        
        
      },
      {
        name: "School of Arts and Humanities",
        description:"The Department of English and Cultural Studies, in consonance with its mission statement, is committed to promoting an intellectual climate through artistic creation, critical mediation and innovative ideation. It inculcates among its students a critical reading of the self, the society and the imagined with the aim of moulding them into responsible and socially sensitive citizens. The Department facilitates their holistic development by building emotional, academic, social, professional and global competencies. The Department aspires to create a nuanced understanding of canonical and non-canonical literary and cultural texts, their social milieu for an engaged and enduring understanding of life.",
        "programs": {
            "undergraduate": [
              {
                "name": "Bachelor Of Arts (English/Honours/Honours with Research)(Bangalore Bannerghatta Road Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelors of Arts (Communication and Media, English/ Honours/Honours with Research )",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelor Of Arts (Liberal Arts/Honours/Honours with Research)(Bangalore Bannerghatta Road Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelors of Arts (Journalism and Digital  Media, English/ Honours/Honours with Research )",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelors of Arts (Psychology  English/ Honours/Honours with Research )",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelors of Arts (Psychology  English/ Honours/Honours with Research )(Delhi NCR Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Bachelors of Arts (Psychology  English/ Honours/Honours with Research )(Bangalore Yeshwanthpur Campus)",
                "degree": "",
                "duration": ""
              }
            ],
            "postgraduate": [
              {
                "name": "Master Of Arts English and Cultural Studies(Bangalore Bannerghatta Road Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Post Graduate Diploma in Public Administration(PGD PSA)(Delhi NCR Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master Of Arts English With Communication Studies",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master Of Arts English With Communication Studies (Delhi NCR Off Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master Of Arts English With Communication Studies (Bangalore Yeshwanthpur Campus)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Post Graduate Diploma in Research methodology(PGDR)",
                "degree": "",
                "duration": ""
              }
            ],
            doctoral: [
              {
                name: "Doctor of Philosophy (PhD) in Cultural Studies(Bangalore Bannerghatta Road Campus)",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              },
              {
                name: "Post Graduate Diploma in Research(PGDR)",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              },
              {
                name: "Doctor Of Philosophy (PhD) in English Studies ",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              },
              {
                name: "Doctor of Philosophy (PhD) in English Studies (Bangalore Bannerghatta Road Campus) ",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              },
              {
                name: "Doctor of Philosophy (PhD) in English Studies (Delhi NCR Off Campus)",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              },
              {
                name: "Doctor of Philosophy (PhD) in English Studies (Pune Lavasa  Off Campus) ",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              },
              {
                name: "Doctor of Philosophy (PhD) in English Studies (Bangalore Yeshwanthpur Campus)",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              }
            ]

            
            
            
          }
      },
      {
        name: "School of Education",
        description:"The School of Education, CHRIST (Deemed to be University), Bangalore offers a range of undergraduate, postgraduate and doctoral programmes in education. CHRIST (Deemed to be University) is the only academic institution in India to provide learners with the opportunity to pursue an International Baccalaureate integrated programme in the Bachelor of Education programme. The diversity of the programmes is an indicator of the wide expertise of the faculty in teaching and research.",
        "programs": {
            "undergraduate": [
              {
                "name": "Bachelor of Education (BEd)",
                "degree": "",
                "duration": ""
              },
              
            ],
            "postgraduate": [
              {
                "name": "Post Graduate Diploma in International Education (PGDIE) and International Baccalaureate (IB) Educator Certificate in Teaching and learning DP (BLENDED MODE)",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Master of Science Educational Psychology",
                "degree": "",
                "duration": ""
              },
              {
                "name": "Post Graduate Diploma in Research Methodology (PGDR)",
                "degree": "",
                "duration": ""
              },
              
            ],
            doctoral: [
              {
                name: "Post Graduate Diploma in Research (PGDR)",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              },
              {
                name: "Doctor of Philosophy (PhD) in Education",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              },
              
            ]

            
            
            
          }
      },

      {
        name: "School of Business and Management",
        description:"School of Business and Management offers business education through Undergraduate, Graduate, M.Phil, and Doctoral programs under different management streams. The curriculum and Pedagogy integrate rigorous academic theory with real-life challenges and is geared to equip the students to successfully face the challenges of a long career in the world of uncertainty. The faculty composition has a healthy mix of Academicians and Industry Practitioners. Our faculty members’ scholastic excellence is depicted through their publications in renowned peer-reviewed journals. The holistic approach of learning through various programs and quality improvement activities ensure students bloom and succeed in this competitive world. As a Business School, we believe our pedagogy enables, engages, exemplifies, and encourages students to make effective business decisions. The curriculum design provides students with the best opportunities to be well-rounded managers and business leaders. We offer experiential learning for our students through an array of activities like Social Responsibility Projects, Industry Review Projects, Organisation Structure Study, Outbound Training, Book Review Competition, Summer Internships, Current Affairs and Weekly Presentations, Skill Enhancement Programmes and Dissertation. We handhold our students through our mentoring sessions. We offer our students the best of opportunities and a launching pad for careers. The professional BHM course at CHRIST (Deemed to be University) aims at developing young talent for the hotel industry and build in the other strengths such that they are able to venture into allied fields too. The training program focuses on imbibing technical knowledge and skills in hotel operations. The aim of this course is to provide “a cut above the rest” man-power to the ever-growing demands of the hotel and tourism industry. The interactive method of teaching at CHRIST (Deemed to be University) is to bring about attitudinal changes to future professionals of the industry. The Department of Hotel Management, CHRIST (Deemed to be University) is to bring about attitudinal changes to future professionals of the industry. The Department of Hotel Management, CHRIST (Deemed to be University) has always been committed to its academic excellence, professional competency and has been providing quality manpower to the hospitality and service industry since 1991.The Department offers an accredited Bachelor of Hotel Management (BHM) degree designed to provide study in the core of business foundation and professional hospitality management courses and a choice of interdisciplinary elective emphases. Students in the program learn innovative concepts and practices that guide hospitality and tourism organizations in a dynamic and multi-cultural world.",
        "programs": {
            "undergraduate": [
              {
                "name": "",
                "degree": "",
                "duration": ""
              },
              
            ],
            "postgraduate": [
              
              {
                "name": "",
                "degree": "",
                "duration": ""
              },
              
            ],
            doctoral: [
              {
                name: "",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              },
             
              
            ]

            
            
            
          }
      },
      {
        name: "School of Commerce, Finance and Accountancy",
        description:"The Department of Commerce is a vibrant community of faculty and students under the School of Commerce, Finance and Accountancy.  It believes in developing global competencies in students through quality education, research and continuous innovation. The School provides a proficient environment to nurture commerce professionals with a high level of knowledge and competence to effectively contribute to the society with commitment and integrity. The department offers BCom, BCom Honours, BCom (Strategic Finance Honours), MCom. and Doctoral programmes. Besides this, it also offers various value-added professional programmes and certifications through recognised global bodies such as the Institute of Management Accountants (IMA) USA, the Chartered Institute for Securities and Investment (CISI), UK and the Insurance Institute of India. The department has partnership with various universities in the US, UK and the EU for faculty exchange,  student exchange and research collaborations. In recognition of excellence in the provision of  higher education in the fields of financial services, CHRIST was awarded the ‘CISI Centre of Excellence’ Accreditation in November 2016. CHRIST is by far, the only university outside the UK to be conferred with this status. In the February 2020, the IMA (USA) awarded the Endorsed School status to the BCom (Strategic Finance Honours) programme for meeting IMA’s Higher Education Quality Standards. The Department of Commerce has also consistently featured amongst the top 10 Commerce Colleges in the country as per the India Today Best Colleges survey.The Department of Professional Studies offers some of the most unique and specialized programmes in the field of commerce and management. With strategic partnerships and integration with leading national and international professional bodies, the department constantly strives to nurture future professionals and leaders in the field of Commerce, Finance, and Management. With research opportunities, certification courses, and a range of cultural activities, the department is a vibrant and dynamic space for students to evolve into responsible, ethical, and holistic individuals.The Department of Professional Studies offers four undergraduate programmes and three post-graduate programmes strongly anchored by a robust curriculum and professional body integration. Each programme is designed with a distinctive vision with a focus on nurturing well rounded global citizens equipped with the right knowledge, skills, and mindset to perform outstandingly in their chosen fields ",
        "programs": {
            "undergraduate": [
              {
                "name": "",
                "degree": "",
                "duration": ""
              },
              
            ],
            "postgraduate": [
              
              {
                "name": "",
                "degree": "",
                "duration": ""
              },
              
            ],
            doctoral: [
              {
                name: "",
                duration: "",
                researchAreas: [
                  
                ],
                degree: ""
              },
             
              
            ]

            
            
            
          }
      },
      {
        "name": "School of Social Sciences",
        "description": "The Department of Economics has distinguished itself to be one of the leading centers of learning Economics in the country. As a postgraduate and research Department with an enviable legacy of illustrious teachers and alumni, it has carved a niche for itself as a center of learning in which economics is taught with a difference. It is a matter of great satisfaction that students and faculty act in unison to make the teaching-learning process a highly rewarding and purposeful mission.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Arts (Economics, Sociology/Honours/Honours with Research)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Economics, Mathematics, Statistics/Econometrics Honours/Honours with Research) (Bangalore Yeshwanthpur Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Economics, Mathematics, Statistics/Econometrics Honours/Honours with Research)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Economics and Analytics/Honours/Honours with Research) (Pune Lavasa Off Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Economics, Data Analytics/Honours/Honours with Research) (Delhi NCR Off Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Economics, Mathematics/Honours/Honours with Research) (Delhi NCR Off Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Economics Honours/Honours with Research) (Delhi NCR Off Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Arts (Economics/Honours/Honours with Research) (Bangalore Bannerghatta Road Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Arts (Economics/Honours/Honours with Research) (Bangalore Yeshwanthpur Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Arts (Economics, Political Science/Honours/Honours with Research) (Delhi NCR Off Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Arts (BA) (Psychology, Economics/Honours/Honours with Research) (Bangalore Yeshwanthpur Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Arts (Psychology, Economics/Honours/Honours with Research)", "degree": "", "duration": "" },
            { "name": "Bachelor of Arts (Psychology, Economics/Honours/Honours with Research) (Delhi NCR Off Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Arts (Political Science/Honours/Honours with Research) (Bangalore Bannerghatta Road Campus)", "degree": "", "duration": "" },
            { "name": "Bachelor of Arts (History, Political Science/Honours/Honours with Research)", "degree": "", "duration": "" },
            { "name": "Bachelor of Arts (Economics, Political Science/Honours/Honours with Research) (Delhi NCR Off Campus)", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Master of Science Economics & Analytics (Delhi NCR Off Campus)", "degree": "", "duration": "" },
            { "name": "Master of Science Economics & Analytics (Pune Lavasa Off Campus)", "degree": "", "duration": "" },
            { "name": "Master of Arts Applied Economics", "degree": "", "duration": "" },
            { "name": "Master of Arts Applied Economics (Bangalore Yeshwanthpur Campus)", "degree": "", "duration": "" },
            { "name": "Master of Arts Economics (Interdisciplinary Masters Programme)", "degree": "", "duration": "" },
            { "name": "Post Graduate Diploma in Research Methodology (PGDR)", "degree": "", "duration": "" },
            { "name": "Master of Arts International Studies", "degree": "", "duration": "" }
          ],
          "doctoral": [
            { "name": "Post Graduate Diploma in Research (PGDR)", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in Economics", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in Economics (Delhi NCR Off Campus)", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in Economics (Pune Lavasa Off Campus)", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in History", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in Political Science", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in International Studies", "degree": "", "duration": "", "researchAreas": [] }
          ]
        }
      },
      {
        "name": "School of Engineering and Technology",
        "description": "The School of Engineering and Technology at CHRIST (Deemed to be University) offers diverse undergraduate, postgraduate, and doctoral programs across various engineering disciplines. The school aims to provide students with cutting-edge knowledge and hands-on experience to excel in their respective fields.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Technology Civil Engineering", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology Civil Engineering (Lateral Entry)", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology (Computer Science and Engineering – Artificial Intelligence and Machine Learning)", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology (Computer Science and Engineering – Data Science)", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology (Computer Science and Engineering – IoT)", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology Information Technology", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology Computer Science and Engineering", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology Electrical and Electronics Engineering", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology Electronics and Communication Engineering", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology Artificial Intelligence and Machine Learning", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology Mechanical Engineering", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology Automobile Engineering", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology Robotics and Mechatronics", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Master of Technology Structural Engineering", "degree": "", "duration": "" },
            { "name": "Master of Technology (Data Science)", "degree": "", "duration": "" },
            { "name": "Master of Technology Computer Science and Engineering", "degree": "", "duration": "" },
            { "name": "Master of Technology Power Systems", "degree": "", "duration": "" },
            { "name": "Master of Technology in VLSI and Embedded Systems", "degree": "", "duration": "" },
            { "name": "Master of Technology Machine Design", "degree": "", "duration": "" },
            { "name": "Post Graduate Diploma in Research Methodology (PGDR)", "degree": "", "duration": "" }
          ],
          "doctoral": [
            { "name": "Doctor of Philosophy (PhD) in Civil Engineering", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in Computer Science", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in Computer Science and Engineering", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in Information Technology", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in Electrical and Electronics Engineering", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in Electronics and Communication Engineering", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Doctor of Philosophy (PhD) in Mechanical Engineering", "degree": "", "duration": "", "researchAreas": [] }
          ]
        }
      }
      



      
      

    ],
    
    highlights: {
      established: 1946,
      ranking: "NAAC A++ Grade",
      campus: "15 acres",
      placement: "95% placement rate",
      facilities: [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    
    admissionProcess: {
      entranceExams: ["KCET", "COMEDK", "JEE Main"],
      applicationPeriod: "February - July",
      requiredDocuments: [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    
    contact: {
      address: "Bull Temple Road, Basavanagudi, Bangalore - 560019",
      phone: "+91-80-26622130",
      email: "info@bmsce.ac.in",
      website: "www.bmsce.ac.in"
    }
  },


  {
    id: 3,
    name: "Jain University",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/10.webp"),
    description: "The University which is based in Bangalore – the Silicon Valley of India, offers a conducive environment for learning, be it academically or extracurricular activities. Known for its emphasis on education, entrepreneurship, research and sports, JAIN (Deemed-to-be University) has some of the best minds in the educational and research fields, and centers that inspire entrepreneurship and groundbreaking work to simplify and manage life better. What makes JAIN (Deemed-to-be University) different is its outlook towards life, its values and beliefs. Its ever-evolving and open-minded system and quest for continued success and resilience, has made it one of the top universities in India.",
    
    schools: [
      
      {
        "name": "Department of Computer Science & IT",
        "description": "The Department of Computer Science & IT offers diverse undergraduate, postgraduate, and diploma programs in various fields such as Artificial Intelligence, Cyber Security, Data Analytics, Cloud Technology, and Animation. The department aims to provide students with cutting-edge knowledge and hands-on experience to excel in the technology-driven world.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Computer Applications", "degree": "BCA", "duration": "3 years" },
            { "name": "Bachelor of Science (Animation)", "degree": "BSc", "duration": "3 years" },
            { "name": "Bachelor of Computer Applications (Information Security and Mobile Applications)", "degree": "BCA", "duration": "3 years" },
            { "name": "Bachelor of Computer Applications (Cloud Technology and Information Security)", "degree": "BCA", "duration": "3 years" },
            { "name": "Bachelor of Computer Applications (Mobile Applications and Cloud Technology)", "degree": "BCA", "duration": "3 years" },
            { "name": "Bachelor of Computer Applications (Data Analytics)", "degree": "BCA", "duration": "3 years" },
            { "name": "Bachelor of Science (Digital Filmmaking)", "degree": "BSc", "duration": "3 years" },
            { "name": "Bachelor of Science (Honours) (Data Science and Analytics)", "degree": "BSc (Hons)", "duration": "3 years" },
            { "name": "Bachelor of Science (Gaming)", "degree": "BSc", "duration": "3 years" },
            { "name": "Bachelor of Science (Graphics and VFX)", "degree": "BSc", "duration": "3 years" },
            { "name": "Bachelor of Computer Applications (Artificial Intelligence)", "degree": "BCA", "duration": "3 years" },
            { "name": "Bachelor of Computer Applications (Cyber Security)", "degree": "BCA", "duration": "3 years" }
          ],
          "postgraduate": [
            { "name": "Master of Computer Applications with specialization in Information Security Management Services", "degree": "MCA", "duration": "2 years" },
            { "name": "Master of Computer Applications with specialization in Storage and Cloud Technology", "degree": "MCA", "duration": "2 years" },
            { "name": "Master of Science (Computer Science and Information Technology)", "degree": "MSc", "duration": "2 years" },
            { "name": "Master of Science (Animation)", "degree": "MSc", "duration": "2 years" },
            { "name": "Post Graduate Diploma (Information Technology) Specialization in Big Data / Cyber Security / Cloud Technology with IoT", "degree": "PG Diploma", "duration": "1 year" }
          ]
        }
      },
      {
        "name": "Department of Biotechnology & Genetics",
        "description": "The Department of Biotechnology & Genetics offers undergraduate and postgraduate programs focusing on Biochemistry, Genetics, and Biotechnology. The department aims to equip students with in-depth knowledge and practical skills in biotechnology and genetic sciences.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Science (BcGBt – Biochemistry, Genetics & Biotechnology)", "degree": "BSc", "duration": "3 years" }
          ],
          "postgraduate": [
            { "name": "Master of Science (Biotechnology)", "degree": "MSc", "duration": "2 years" }
          ]
        }
      },
      {
        "name": "Department of Microbiology & Botany",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Science (CMBt – Chemistry, Microbiology, Biotechnology)", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Master of Science (Microbiology)", "degree": "", "duration": "" }
          ]
        }
      },
      {
        "name": "Department of Biochemistry",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Master of Science (Biochemistry)", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "", "degree": "", "duration": "" }
          ]
        }
      }
      ,{
        "name": "Department of Chemistry",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Master of Science (Chemistry)", "degree": "", "duration": "" }
          ]
        }
      },
      {
        "name": "Department of Forensic Science",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Science (Forensic Science)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Honours) (Forensic Science)", "degree": "", "duration": "" }

            
          ],
          "postgraduate": [
            { "name": "Master of Science (Forensic Science)", "degree": "", "duration": "" }
          ]
        }
      },
      
      {
        "name": "Department of Psychology",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Science (Honours) (Psychology)", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Master of Science (Psychology)", "degree": "", "duration": "" },
            { "name": "Post Graduate Diploma (Psychological Counselling)", "degree": "", "duration": "" },
            { "name": "Post Graduate Diploma (Sports Psychology)", "degree": "", "duration": "" }
          ]
        }
      },
      {
        "name": "Department of Physics & Electronics",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Science (PMCs – Physics, Mathematics & Computer Science)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (RPCs – Renewable Energy, Physics & Computer Science)", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Master of Science (Physics)", "degree": "", "duration": "" }
          ]
        }
      },
      {
        "name": "Department of Allied Healthcare & Sciences",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Science (Nuclear Medicine Technology)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Cardiac Technology)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Virology & Immunology)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Cancer Biology)", "degree": "", "duration": "" },
            { "name": "Bachelor of Science (Nutrition and Dietetics)", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Master of Science (Molecular Medicine and Stem Cell Technologies)", "degree": "", "duration": "" },
            { "name": "Master of Science (Cellular and Molecular Oncology)", "degree": "", "duration": "" }
          ],
          "doctoral": []
        }
      },
      {
        "name": "Department of Information Science & Engineering",
        "description": "Information Science & Engineering (ISE) Department was established in the year 2005 to cater to the growing requirements of professionals in the emerging field of Information Science and Engineering. Since its inception, it has made rapid growth in imparting quality education in the areas of information technologies. The ISE Department at the Faculty of Engineering and Technology (FET) has a team of highly skilled faculty members who strive for excellence. Additionally, the ISE Department has exceptional computing facilities for the students as well as faculty to carry out research work.",
        "programs": {
          "undergraduate": [],
          "postgraduate": [],
          "doctoral": []
        }
      },
      {
        "name": "Department of Computer Science Engineering",
        "description": "The Department of Computer Science and Engineering is committed to providing a dynamic and innovative learning environment that fosters continuous learning and research to meet the challenges of the rapidly evolving global landscape. The department is constantly keeping pace with the latest technological advancements and industry trends to ensure that students receive the most cutting-edge and industry-relevant education possible.",
        "programs": {
          "undergraduate": [
            { "name": "Computer Science & Engineering", "degree": "", "duration": "" },
            { "name": "Computer Science & Engineering – Cloud Technology and Information Security", "degree": "", "duration": "" },
            { "name": "Computer Science & Engineering – Mobile Applications and Cloud Technology", "degree": "", "duration": "" },
            { "name": "Computer Science & Engineering – Artificial Intelligence and Machine Learning", "degree": "", "duration": "" },
            { "name": "Computer Science & Engineering – Artificial Intelligence and Data Engineering", "degree": "", "duration": "" },
            { "name": "Computer Science and Business Systems in association with", "degree": "", "duration": "" },
            { "name": "Computer Science and Engineering – Internet of Things", "degree": "", "duration": "" },
            { "name": "Computer Engineering – Software Engineering", "degree": "", "duration": "" },
            { "name": "Computer Science and Engineering – Artificial Intelligence", "degree": "", "duration": "" },
            { "name": "Computer Science and Engineering – Data Science", "degree": "", "duration": "" },
            { "name": "Computer Science and Engineering – Cyber Security", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Computer Science and Engineering", "degree": "", "duration": "" },
            { "name": "Cyber Security", "degree": "", "duration": "" },
            { "name": "Data Sciences", "degree": "", "duration": "" },
            { "name": "Artificial Intelligence", "degree": "", "duration": "" }
          ],
          "doctoral": [
            { "name": "Ph.D (Computer Science and Engineering)", "degree": "", "duration": "", "researchAreas": [] }
          ]
        }
      },
      {
        "name": "Department of Aerospace Engineering",
        "description": "The Department of Aerospace Engineering was established in the year 2009, a collaborative body between JAIN (Deemed-to-be University) and Society of Indian Aerospace Technologies & Industries (SIATI), offering engineering courses in the field of Aerospace. The department works with Jain University – Faculty of Engineering and Technology (JU-FET) to prepare students in Aerospace Engineering for research-oriented professions as well as careers related to industrial designing, problem-solving, and innovation in the aeronautics sector.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Technology (Aerospace Engineering) in collaboration with Tata Technologies", "degree": "", "duration": "" },
            { "name": "Bachelor of Technology (Aeronautical Engineering) in collaboration with Tata Technologies", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "M.Tech in Aerospace Structures and Design", "degree": "", "duration": "" },
            { "name": "M.Tech in Aerodynamic Engineering", "degree": "", "duration": "" },
            { "name": "M.Tech in Aerospace Propulsion Technology", "degree": "", "duration": "" },
            { "name": "M.Tech in Defence Technology", "degree": "", "duration": "" }
          ],
          "doctoral": [
            { "name": "Ph.D in Aerospace Engineering", "degree": "", "duration": "", "researchAreas": [] }
          ]
        }
      }, 
      {
        "name": "Department of Civil Engineering",
        "description": "The Department of Civil Engineering has a select band of faculty who are an amalgam of rich administrative, academic, research, and industry experience. Students are exposed to state-of-the-art civil engineering practices through institute-industry interaction, internships, field visits, and in-house/on-site camps apart from regular classroom teaching. The department has specialized laboratory facilities and encourages research and consultancy. The CAD lab is well-equipped with the latest hardware/software, including CYPE, STAAD-PRO, AUTOCAD, MAP3D, CIVIL3D, AUTOCAD RASTERDESIGN, PRIMAVERA, MS Project, RIVET, GIS (Open Source), and GPS data manager, which are offered as value-added programs to prepare industry-ready Civil Engineers.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Technology (Civil Engineering)", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Master of Technology (Civil Engineering – Structural Engineering)", "degree": "", "duration": "" },
            { "name": "Master of Technology (Civil Engineering)", "degree": "", "duration": "" }
          ],
          "doctoral": [
            { "name": "Ph.D. – Civil Engineering", "degree": "", "duration": "", "researchAreas": [] }
          ]
        }
      },
      {
        "name": "Department of Mechanical Engineering",
        "description": "Accredited by the National Board of Accreditation (NBA). Specialization in 3D Printing / Mechatronics. Our industry partners, including Toyota Kirloskar Motors, TATA Technologies, Siemens, and the Indian Machine Tool Manufacturers Association (IMTMA), help make Mechanical Engineering graduates industry-ready. Faculty members are qualified from institutions such as the University of Michigan, Brunel University, IITs, NITs, Anna University, and Jadavpur University. The department has established a Centre of Excellence with Toyota Kirloskar Motors to support students in acquiring high-quality skill sets in engine operating mechanisms.",
        "programs": {
          "undergraduate": [
            { "name": "Mechanical Engineering in collaboration", "degree": "", "duration": "" },
            { "name": "Mechanical Engineering with specialization in Mechatronics in association", "degree": "", "duration": "" },
            { "name": "Mechanical Engineering with specialization in 3D Printing", "degree": "", "duration": "" },
            { "name": "Mechanical Engineering with specialization in Robotics & Industrial Automation in association with Tata Technologies", "degree": "", "duration": "" },
            { "name": "Mechanical Engineering with specialization in Smart & Hybrid Vehicle Technology CoE", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Energy and Environmental Management", "degree": "", "duration": "" }
          ],
          "doctoral": [
            { "name": "Ph.D (Full Time and Part Time)", "degree": "", "duration": "", "researchAreas": [] }
          ]
        }
      },
      {
        "name": "Department of Economics & Social Sciences",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Arts (PSE – Psychology, Sociology, Economics)", "degree": "", "duration": "" },
            { "name": "Bachelor of Arts (Honours) (Economics)", "degree": "", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Master of Arts (Economics)", "degree": "", "duration": "" }
          ],
          "doctoral": []
        }
      }
         

    ],
    
    highlights: {
      established: 1946,
      ranking: "NAAC A++ Grade",
      campus: "15 acres",
      placement: "95% placement rate",
      facilities: [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    
    admissionProcess: {
      entranceExams: ["KCET", "COMEDK", "JEE Main"],
      applicationPeriod: "February - July",
      requiredDocuments: [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    
    contact: {
      address: "Bull Temple Road, Basavanagudi, Bangalore - 560019",
      phone: "+91-80-26622130",
      email: "info@bmsce.ac.in",
      website: "www.bmsce.ac.in"
    }
  },
  {
    id: 4,
    name: "Dayananda Sagar College of Engineering",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/2.jpeg"),
    description: "Dayananda Sagar College of Engineering is approved by All India Council for Technical Education (AICTE), Govt. of India and affiliated to Visvesvaraya Technological University. It has widest choice of engineering branches having 18 Under Graduate courses & 13 Post Graduate courses. In addition, it has 20 Research Centres in different branches of Engineering catering to research scholars for obtaining Ph.D under VTU. Various courses are accredited by NBA. The Institute is spread over 23 acres of land with large infrastructure supported by laboratories with state-of-the-art, Equipment & Machines. The Central Library with modern facilities and the Digital Library provides the knowledge base for the students.",
    
    schools: [
      {
        "name": "Under Graduate Programs",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Artificial Intelligence and Machine Learning", "degree": "", "duration": "",  },
            { "name": "Aeronautical Engineering", "degree": "", "duration": "",  },
            { "name": "Automobile Engineering", "degree": "", "duration": "",  },
            { "name": "Biotechnology", "degree": "", "duration": "",  },
            { "name": "Computer Science and Engineering", "degree": "", "duration": "", },
            { "name": "Computer Science and Business Systems", "degree": "", "duration": "", },
            { "name": "Computer Science & Engineering (Cyber Security)", "degree": "", "duration": "",},
            { "name": "Computer Science & Engineering (Data Science)", "degree": "", "duration": "", },
            { "name": "Computer Science and Design", "degree": "", "duration": "",  },
            { "name": "Chemical Engineering", "degree": "", "duration": "", },
            { "name": "Civil Engineering", "degree": "", "duration": "", },
            { "name": "Electrical & Electronics Engineering", "degree": "", "duration": "", },
            { "name": "Electronics & Communication Engineering", "degree": "", "duration": "",  },
            { "name": "Information Science and Engineering", "degree": "", "duration": "",  },
            { "name": "Electronics and Instrumentation Engineering", "degree": "", "duration": "",  },
            { "name": "Mechanical Engineering", "degree": "", "duration": "",  },
            { "name": "Medical Electronics Engineering", "degree": "", "duration": "", },
            { "name": "Electronics and Telecommunication Engineering", "degree": "", "duration": "",  }
          ]
        }
      },
      {
        "name": "Post Graduate Programs",
        "description": "",
        "programs": {
          "postgraduate": [
            { "name": "Structural Engineering", "degree": "", "duration": "" },
            { "name": "Highway Technology", "degree": "", "duration": "" },
            { "name": "Design Engineering", "degree": "", "duration": "" },
            { "name": "Computer Integrated Manufacturing", "degree": "", "duration": "" },
            { "name": "Digital Electronics and Communication", "degree": "", "duration": "" },
            { "name": "VLSI Design and Embedded Systems", "degree": "", "duration": "" },
            { "name": "Power Electronics", "degree": "", "duration": "" },
            { "name": "Microelectronics and Control Systems", "degree": "", "duration": "" },
            { "name": "Computer Network Engineering", "degree": "", "duration": "" },
            { "name": "Digital Communication & Networking", "degree": "", "duration": "" },
            { "name": "Computer Science & Engineering", "degree": "", "duration": "" },
            { "name": "Master of Business Administration", "degree": "", "duration": "" },
            { "name": "Master of Computer Applications", "degree": "", "duration": "" }
          ]
        }
      },
      {
        "name": "Basic Science and Humanities",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Physics", "degree": "", "duration": "" },
            { "name": "Chemistry", "degree": "", "duration": "" },
            { "name": "Mathematics", "degree": "", "duration": "" },
            { "name": "Humanities", "degree": "", "duration": "" }
          ]
        }
      }
      
      
      
    ],
    
    highlights: {
      established: 1946,
      ranking: "NAAC A++ Grade",
      campus: "15 acres",
      placement: "95% placement rate",
      facilities: [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    
    admissionProcess: {
      entranceExams: ["KCET", "COMEDK", "JEE Main"],
      applicationPeriod: "February - July",
      requiredDocuments: [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    
    contact: {
      address: "Bull Temple Road, Basavanagudi, Bangalore - 560019",
      phone: "+91-80-26622130",
      email: "info@bmsce.ac.in",
      website: "www.bmsce.ac.in"
    }
  },
  {
    id: 5,
    name: "Dayananda Sagar College of Engineering",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/7.jpg"),
    description: "Dayananda Sagar College of Engineering is approved by All India Council for Technical Education (AICTE), Govt. of India and affiliated to Visvesvaraya Technological University. It has widest choice of engineering branches having 18 Under Graduate courses & 13 Post Graduate courses. In addition, it has 20 Research Centres in different branches of Engineering catering to research scholars for obtaining Ph.D under VTU. Various courses are accredited by NBA. The Institute is spread over 23 acres of land with large infrastructure supported by laboratories with state-of-the-art, Equipment & Machines. The Central Library with modern facilities and the Digital Library provides the knowledge base for the students.",
    
    schools: [
      {
        "name": "Under Graduate Programs",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Artificial Intelligence and Machine Learning", "degree": "", "duration": "",  },
            { "name": "Aeronautical Engineering", "degree": "", "duration": "",  },
            { "name": "Automobile Engineering", "degree": "", "duration": "",  },
            { "name": "Biotechnology", "degree": "", "duration": "",  },
            { "name": "Computer Science and Engineering", "degree": "", "duration": "", },
            { "name": "Computer Science and Business Systems", "degree": "", "duration": "", },
            { "name": "Computer Science & Engineering (Cyber Security)", "degree": "", "duration": "",},
            { "name": "Computer Science & Engineering (Data Science)", "degree": "", "duration": "", },
            { "name": "Computer Science and Design", "degree": "", "duration": "",  },
            { "name": "Chemical Engineering", "degree": "", "duration": "", },
            { "name": "Civil Engineering", "degree": "", "duration": "", },
            { "name": "Electrical & Electronics Engineering", "degree": "", "duration": "", },
            { "name": "Electronics & Communication Engineering", "degree": "", "duration": "",  },
            { "name": "Information Science and Engineering", "degree": "", "duration": "",  },
            { "name": "Electronics and Instrumentation Engineering", "degree": "", "duration": "",  },
            { "name": "Mechanical Engineering", "degree": "", "duration": "",  },
            { "name": "Medical Electronics Engineering", "degree": "", "duration": "", },
            { "name": "Electronics and Telecommunication Engineering", "degree": "", "duration": "",  }
          ]
        }
      },
      {
        "name": "Post Graduate Programs",
        "description": "",
        "programs": {
          "postgraduate": [
            { "name": "Structural Engineering", "degree": "", "duration": "" },
            { "name": "Highway Technology", "degree": "", "duration": "" },
            { "name": "Design Engineering", "degree": "", "duration": "" },
            { "name": "Computer Integrated Manufacturing", "degree": "", "duration": "" },
            { "name": "Digital Electronics and Communication", "degree": "", "duration": "" },
            { "name": "VLSI Design and Embedded Systems", "degree": "", "duration": "" },
            { "name": "Power Electronics", "degree": "", "duration": "" },
            { "name": "Microelectronics and Control Systems", "degree": "", "duration": "" },
            { "name": "Computer Network Engineering", "degree": "", "duration": "" },
            { "name": "Digital Communication & Networking", "degree": "", "duration": "" },
            { "name": "Computer Science & Engineering", "degree": "", "duration": "" },
            { "name": "Master of Business Administration", "degree": "", "duration": "" },
            { "name": "Master of Computer Applications", "degree": "", "duration": "" }
          ]
        }
      },
      {
        "name": "Basic Science and Humanities",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "Physics", "degree": "", "duration": "" },
            { "name": "Chemistry", "degree": "", "duration": "" },
            { "name": "Mathematics", "degree": "", "duration": "" },
            { "name": "Humanities", "degree": "", "duration": "" }
          ]
        }
      }
      
      
      
    ],
    
    highlights: {
      established: 1946,
      ranking: "NAAC A++ Grade",
      campus: "15 acres",
      placement: "95% placement rate",
      facilities: [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    
    admissionProcess: {
      entranceExams: ["KCET", "COMEDK", "JEE Main"],
      applicationPeriod: "February - July",
      requiredDocuments: [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    
    contact: {
      address: "Bull Temple Road, Basavanagudi, Bangalore - 560019",
      phone: "+91-80-26622130",
      email: "info@bmsce.ac.in",
      website: "www.bmsce.ac.in"
    }
  },
  {
    id: 6,
    name: "CMR Institute of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/5.jpeg"),
    description: "Established in 2000, the CMR Institute of Technology imparts quality, pragmatic education in engineering and management to help students hone their analytical abilities and develop their creative thinking skills. CMRIT meets the rapidly growing need for technology professionals by nurturing young minds in an innovative and progressive learning environment. Situated in the very heart of South India’s IT corridor, the CMRIT campus in Whitefield, Bangalore is centrally located, well connected and easily accessible.",
    
    schools: [
      {
        "name": "Undergraduate Programmes",
        "description": "",
        "programs": {
          "undergraduate": [
            { "name": "BE Information Science & Engineering", "degree": "", "duration": "" },
            { "name": "BE Computer Science & Engineering", "degree": "", "duration": "" },
            { "name": "BE Electronics & Communication Engineering", "degree": "", "duration": "" },
            { "name": "BE Artificial Intelligence and Data Science", "degree": "", "duration": "" },
            { "name": "BE Artificial Intelligence and Machine Learning", "degree": "", "duration": "" },
            { "name": "BE Computer Science & Engineering (AI and ML)", "degree": "", "duration": "" },
            { "name": "BE Computer Science & Engineering (Data Science)", "degree": "", "duration": "" }
          ]
        }
      },
      
      {
        "name": "Postgraduate Programmes",
        "description": "",
        "programs": {
          "postgraduate": [
            { "name": "Master of Computer Applications (MCA)", "degree": "", "duration": "" },
            { "name": "Master of Business Administration (MBA)", "degree": "", "duration": "" }
          ]
        }
      }
      ,
      {
        "name": "Doctoral Programmes",
        "description": "",
        "programs": {
          "doctoral": [
            { "name": "Ph.D in Engineering", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Ph.D in Sciences", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Ph.D in Business Administration", "degree": "", "duration": "", "researchAreas": [] },
            { "name": "Ph.D in Computer Applications", "degree": "", "duration": "", "researchAreas": [] }
          ]
        }
      },
      
      
      {
        "name": "Science and Humanities Department",
        "description": "Covers fundamental subjects essential for various engineering and science programs.",
        "programs": {
          "subjects": [
            { name: "Mathematics", details: "" },
            { name: "Physics", details: "" },
            { name: "Chemistry", details: "" },
            { name: "Humanities", details: "" }
          ]
        }
      },
      
      
      
      
      
    ],
    
    highlights: {
      established: 1946,
      ranking: "NAAC A++ Grade",
      campus: "15 acres",
      placement: "95% placement rate",
      facilities: [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    
    admissionProcess: {
      entranceExams: ["KCET", "COMEDK", "JEE Main"],
      applicationPeriod: "February - July",
      requiredDocuments: [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    
    contact: {
      address: "Bull Temple Road, Basavanagudi, Bangalore - 560019",
      phone: "+91-80-26622130",
      email: "info@bmsce.ac.in",
      website: "www.bmsce.ac.in"
    }
  },

  {
    id: 7,
    name: "Mount Carmel College Autonomous",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/11.jpeg"),
    description: "The journey of Mount Carmel College over the past 75 years is a journey of ‘Empowering through Education’, making a difference to thousands of young women. Our commitment to value-based education, which integrates classroom learning with experiential learning from industry and community, has nurtured opinion makers and leaders who have made a difference to society. Over the decades, we have innovated and upgraded our programmes to keep pace with the needs of the Knowledge Economy.",
    
    schools: [
      {
        "name": "School of Natural and Applied Sciences",
        "description": "The stream of Sciences strives to instill students with inquisitiveness, perseverance, and enthusiasm in the field of Science. Each program within this stream has been designed to equip students with proficient skill sets to develop holistically and master the field through the guidance of esteemed faculty members. As this field is known to be dynamic and based on empirical experiments, students will follow a rigorous curriculum to imbibe the episteme at its optimum. Most importantly, our programs will train students to develop a deeper interest in the field, bask in academic research exposure and build a trajectory of utmost success in their careers. Through this stream, students will be driven to meet and create beyond the field’s expectations through a thoroughly administered facilitation of the craft.",
        "programs": {
          "undergraduate": [
            { "name": "Biochemistry", "degree": "B.Sc", "duration": "" },
            { "name": "Biotechnology", "degree": "B.Sc", "duration": "" },
            { "name": "Composite Home Science (H.Sc.)", "degree": "B.Sc", "duration": "" },
            { "name": "Computer Application", "degree": "BCA", "duration": "" },
            { "name": "Data Science", "degree": "B.Sc", "duration": "" },
            { "name": "Fashion and Apparel Design (FAD)", "degree": "B.Sc", "duration": "" },
            { "name": "Food Science & Nutrition", "degree": "B.Sc", "duration": "" },
            { "name": "Interior Design Management (IDM)", "degree": "B.Sc", "duration": "" },
            { "name": "Botany, Microbiology", "degree": "B.Sc", "duration": "" },
            { "name": "Botany, Zoology", "degree": "B.Sc", "duration": "" },
            { "name": "Chemistry, Microbiology", "degree": "B.Sc", "duration": "" },
            { "name": "Computer Science, Mathematics", "degree": "B.Sc", "duration": "" },
            { "name": "Economics, Statistics", "degree": "B.Sc", "duration": "" },
            { "name": "Environmental Science, Biology", "degree": "B.Sc", "duration": "" },
            { "name": "Mathematics, Physics", "degree": "B.Sc", "duration": "" },
            { "name": "Nutrition and Dietetics, Human Development", "degree": "B.Sc", "duration": "" },
            { "name": "Zoology, Biotechnology", "degree": "B.Sc", "duration": "" },
            { "name": "Zoology, Microbiology", "degree": "B.Sc", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Biochemistry", "degree": "M.Sc", "duration": "" },
            { "name": "Biotechnology", "degree": "M.Sc", "duration": "" },
            { "name": "Botany", "degree": "M.Sc", "duration": "" },
            { "name": "Chemistry", "degree": "M.Sc", "duration": "" },
            { "name": "Computer Science", "degree": "M.Sc", "duration": "" },
            { "name": "Computer Applications", "degree": "MCA", "duration": "" },
            { "name": "Electronics", "degree": "M.Sc", "duration": "" },
            { "name": "Food Science & Nutrition", "degree": "M.Sc", "duration": "" },
            { "name": "Human Development", "degree": "M.Sc", "duration": "" },
            { "name": "Life Science", "degree": "M.Sc", "duration": "" },
            { "name": "Mathematics", "degree": "M.Sc", "duration": "" }
          ],
          "doctoral": [
            { "name": "Biochemistry", "degree": "Ph.D", "duration": "" },
            { "name": "Biotechnology", "degree": "Ph.D", "duration": "" },
            { "name": "Botany", "degree": "Ph.D", "duration": "" },
            { "name": "Electronics", "degree": "Ph.D", "duration": "" },
            { "name": "Food Science and Nutrition", "degree": "Ph.D", "duration": "" },
            { "name": "Human Development", "degree": "Ph.D", "duration": "" },
            { "name": "Life Science", "degree": "Ph.D", "duration": "" }
          ],
          "diploma": [
            { "name": "Fashion Designing", "degree": "Diploma", "duration": "" },
            { "name": "Event Management", "degree": "Diploma", "duration": "" },
            { "name": "Environmental Management and Auditing", "degree": "Diploma", "duration": "" }
          ]

        }
      },
      {
        "name": "School of Humanities & Social Sciences",
        "description": "School of Humanities & Social Sciences offers UG & PG programs which complement the traditional intellectual skills associated with humanities with a range of practical skills like critical thinking, communication, cultural awareness, curiosity, and empathy. These contribute to a student’s individual growth, enabling them to carve their own path of success in the world while also making a difference to the larger community. Ranked among the best colleges in India to pursue Humanities, the school offers two-year postgraduate programs and highly multidisciplinary three-year degree or four-year honours undergraduate programs with the right blend of skills, research, and a strong theoretical foundation. The school also offers Ph.D. programs in Economics, English, and Psychology.",
        "programs": {
          "undergraduate": [
            { "name": "Communication and Media", "degree": "B.A (Honours)", "duration": "" },
            { "name": "Economics", "degree": "B.A", "duration": "" },
            { "name": "Journalism & Mass Communication", "degree": "B.A", "duration": "" },
            { "name": "Psychology", "degree": "B.A", "duration": "" },
            { "name": "Sports Management", "degree": "Bachelors", "duration": "" },
            { "name": "Hospitality & Tourism", "degree": "B.Voc", "duration": "" },
            { "name": "History, Political Science", "degree": "B.A", "duration": "" },
            { "name": "History, Travel & Tourism", "degree": "B.A", "duration": "" },
            { "name": "Political Science, Sociology", "degree": "B.A", "duration": "" },
            { "name": "Political Science, Economics", "degree": "B.A", "duration": "" },
            { "name": "Psychology, Communicative English", "degree": "B.A", "duration": "" },
            { "name": "Psychology, Economics", "degree": "B.A", "duration": "" },
            { "name": "Psychology, English Literature", "degree": "B.A", "duration": "" },
            { "name": "Psychology, Journalism", "degree": "B.A", "duration": "" },
            { "name": "Psychology, Sociology", "degree": "B.A", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Economics", "degree": "M.A", "duration": "" },
            { "name": "English", "degree": "M.A", "duration": "" },
            { "name": "Public Policy", "degree": "M.A", "duration": "" },
            { "name": "Psychology", "degree": "M.Sc", "duration": "" }
          ],
          "doctoral": [
            { "name": "Economics", "degree": "Ph.D", "duration": "" },
            { "name": "English", "degree": "Ph.D", "duration": "" },
            { "name": "Psychology", "degree": "Ph.D", "duration": "" }
          ]
        }
      },
      {
        "name": "School of Commerce",
        "description": "The stream of Commerce & Management has been designed to equip students with the skillsets to explore, experiment, and imbibe an in-depth understanding of the trading sector and business activities. This will enable our students to gain empirical as well as technical knowledge.",
        "programs": {
          "undergraduate": [
            { "name": "Commerce (Regular)", "degree": "B.Com", "duration": "" },
            { "name": "Commerce (Tourism & Travel Management)", "degree": "B.Com", "duration": "" },
            { "name": "Commerce (Industry Integrated)", "degree": "B.Com", "duration": "" },
            { "name": "Commerce (Professional)", "degree": "B.Com", "duration": "" },
            { "name": "Commerce (Strategic Finance - Integrated with CMA)", "degree": "B.Com", "duration": "" },
            { "name": "Commerce (Corporate Finance - Integrated with US CPA)", "degree": "B.Com", "duration": "" },
            { "name": "Commerce (BPS - Business Process Services) in Association with Tata Consultancy Services", "degree": "B.Com", "duration": "" },
            { "name": "Commerce (IAF - International Accounting and Finance) Accredited to ACCA", "degree": "B.Com", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Commerce (General)", "degree": "M.Com", "duration": "" },
            { "name": "Commerce (International Business)", "degree": "M.Com", "duration": "" },
            { "name": "Commerce (Financial Analysis)", "degree": "M.Com", "duration": "" },
            { "name": "Economics", "degree": "M.A", "duration": "" },
            { "name": "English", "degree": "M.A", "duration": "" },
            { "name": "Public Policy", "degree": "M.A", "duration": "" },
            { "name": "Psychology", "degree": "M.Sc", "duration": "" }
          ],
          "doctoral": [
            { "name": "Commerce", "degree": "Ph.D", "duration": "" }
          ],
          "diploma": [
            { "name": "DBA/PGDBA (Evening) – One Year Business Administration", "degree": "PG Diploma", "duration": "" }
          ]
        }
      },
      {
        "name": "School of Management",
        "description": "The Department of Business Studies was established in 1993 and offers three undergraduate programs in Management Studies. The program content is delivered by highly experienced, qualified, and professional faculty, both full-time and visiting. Industry experts constitute the BOS on a regular basis to make the content industry-ready. The institution offers excellent infrastructure, like a state-of-the-art auditorium, seminar halls, an automated library, an e-library, dedicated computer labs, and A.V. Rooms.",
        "programs": {
          "undergraduate": [
            { "name": "Business Administration (Specialization in Finance/Marketing/HR & IB)", "degree": "BBA", "duration": "" },
            { "name": "Business Administration (Branding & Advertising)", "degree": "BBA", "duration": "" },
            { "name": "Business Administration (Business Analytics in Association with Miles Education)", "degree": "BBA", "duration": "" }
          ],
          "postgraduate": [
            { "name": "Business Administration", "degree": "MBA", "duration": "Two Year Full Time (Approved by AICTE & Bengaluru City University)" }
          ],
          "diploma": [
            { "name": "PGDBA / PGDIB and Credit Transfer Programs", "degree": "Diploma", "duration": "" }
          ]
        }
      },
       
    ],
    
    highlights: {
      established: 1946,
      ranking: "NAAC A++ Grade",
      campus: "15 acres",
      placement: "95% placement rate",
      facilities: [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    
    admissionProcess: {
      entranceExams: ["KCET", "COMEDK", "JEE Main"],
      applicationPeriod: "February - July",
      requiredDocuments: [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    
    contact: {
      address: "Bull Temple Road, Basavanagudi, Bangalore - 560019",
      phone: "+91-80-26622130",
      email: "info@bmsce.ac.in",
      website: "www.bmsce.ac.in"
    }
  },
  {
    id: 8,
    name: "Nitte Meenakshi Institute Of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/15.jpeg"),
    description: "Recognized as one of the finest educational institutions in Karnataka with students from all over India and abroad, the NITTE Education Trust has a Medical Sciences Complex at Deralakatte, Mangalore. The Trust has more colleges at its second campus at Nitte and at its campuses in Bangalore. The Trust was started in 1979 and is a pioneer in the field of education. Under the banner of the trust are several institutions which include Nitte University and institutions of higher education like Engineering, Management, Medicine, Dental, PhARMaceuticals, Paramedical, Higher Education and several other schools in Mangalore.",
    
    schools: [
      {
        "name": "Undergraduate (BE) Programs",
        "description": "The Bachelor of Engineering (BE) programs are designed to provide students with a strong foundation in engineering principles, technical skills, and problem-solving abilities. These programs focus on both theoretical knowledge and practical applications, preparing students for careers in various engineering disciplines.",
        "programs": {
          "undergraduate": [
            { "name": "Artificial Intelligence & Data Science", "degree": "BE", "duration": "" },
            { "name": "Artificial Intelligence & Machine Learning", "degree": "BE", "duration": "" },
            { "name": "Aeronautical Engineering", "degree": "BE", "duration": "" },
            { "name": "Civil Engineering", "degree": "BE", "duration": "" },
            { "name": "Computer Science & Engineering", "degree": "BE", "duration": "" },
            { "name": "Electrical & Electronics Engineering", "degree": "BE", "duration": "" },
            { "name": "Electronics & Communication Engineering", "degree": "BE", "duration": "" },
            { "name": "Information Science & Engineering", "degree": "BE", "duration": "" },
            { "name": "Mechanical Engineering", "degree": "BE", "duration": "" }
          ]
        }
      },

      {
        "name": "Postgraduate (PG) Programs",
        "description": "The Postgraduate programs aim to provide advanced knowledge, research opportunities, and specialized skills in various fields of science, technology, and management. These programs equip students with the expertise needed for professional growth and innovation in their respective domains.",
        "programs": {
          "postgraduate": [
            { "name": "Defence Technology", "degree": "PG", "duration": "" },
            { "name": "Data Science", "degree": "PG", "duration": "" },
            { "name": "Aerospace Engineering", "degree": "PG", "duration": "" },
            { "name": "Renewable Energy", "degree": "PG", "duration": "" },
            { "name": "Structural Engineering", "degree": "PG", "duration": "" },
            { "name": "VLSI Design & Embedded System", "degree": "PG", "duration": "" },
            { "name": "Computer Science & Engineering", "degree": "PG", "duration": "" },
            { "name": "Robotics and Artificial Intelligence", "degree": "PG", "duration": "" },
            { "name": "Master of Business Administration", "degree": "MBA", "duration": "" },
            { "name": "Master of Computer Applications", "degree": "MCA", "duration": "" }
          ]
        }
      },
      {
        "name": "Diploma Courses",
        "description": "The Diploma programs provide students with foundational knowledge and technical expertise in various engineering disciplines. These courses are designed to equip students with industry-relevant skills and practical training to enhance their career prospects in engineering and technology.",
        "programs": {
          "diploma": [
            { "name": "Aeronautical Engineering", "degree": "Diploma", "duration": "" },
            { "name": "Civil Engineering", "degree": "Diploma", "duration": "" },
            { "name": "Computer Science & Engineering", "degree": "Diploma", "duration": "" },
            { "name": "Electrical & Electronics Engineering", "degree": "Diploma", "duration": "" },
            { "name": "Electronics & Communication Engineering", "degree": "Diploma", "duration": "" },
            { "name": "Mechanical Engineering", "degree": "Diploma", "duration": "" }
          ]
        }
      },
      {
        "name": "Doctoral Programs in Computers and Engineering",
        "description": "The Doctoral programs aim to foster advanced research and innovation in various engineering and computer science disciplines. These Ph.D. programs provide students with an opportunity to contribute to academic excellence and industrial advancements through in-depth study, experimentation, and critical analysis.",
        "programs": {
          "doctoral": [
            { "name": "Aeronautical Engineering", "degree": "Ph.D", "duration": "" },
            { "name": "Civil Engineering", "degree": "Ph.D", "duration": "" },
            { "name": "Computer Science & Engineering", "degree": "Ph.D", "duration": "" },
            { "name": "Electrical & Electronics Engineering", "degree": "Ph.D", "duration": "" },
            { "name": "Electronics & Communication Engineering", "degree": "Ph.D", "duration": "" },
            { "name": "Information Science & Engineering", "degree": "Ph.D", "duration": "" },
            { "name": "Mechanical Engineering", "degree": "Ph.D", "duration": "" },
            { "name": "Management Studies", "degree": "Ph.D", "duration": "" },
            { "name": "Physics", "degree": "Ph.D", "duration": "" },
            { "name": "Chemistry", "degree": "Ph.D", "duration": "" },
            { "name": "Mathematics", "degree": "Ph.D", "duration": "" },
            { "name": "MCA", "degree": "Ph.D", "duration": "" }
          ]
        }
      },
      {
        "name": "Science and Humanities Department",
        "description": "The Science and Humanities Department provides a strong foundation in fundamental sciences and humanities, equipping students with analytical, critical thinking, and communication skills essential for academic and professional success. The department fosters interdisciplinary learning and research, preparing students for diverse career opportunities.",
        "programs":{
        "subjects": [
          {
            "name": "Mathematics",
            "details": ""
          },
          {
            "name": "Physics",
            "details": ""
          },
          {
            "name": "Chemistry",
            "details": ""
          },
          {
            "name": "Humanities",
            "details": ""
          }
        ]
      }
      },

      {
        "name": "Other Departments",
        "description": "These departments offer specialized programs and training to enhance professional development and research capabilities.",
        "programs": 
          {
            
            "subjects": [
              { "name": "Training Methodologies", "details": "Advanced training techniques for educators and professionals." },
              { "name": "Leadership Development", "details": "Developing leadership skills for effective training delivery." }
            ]
          },
          
        
      }
      
      
      
      
      
      
      
       
    ],
    
    highlights: {
      established: 1946,
      ranking: "NAAC A++ Grade",
      campus: "15 acres",
      placement: "95% placement rate",
      facilities: [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    
    admissionProcess: {
      entranceExams: ["KCET", "COMEDK", "JEE Main"],
      applicationPeriod: "February - July",
      requiredDocuments: [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    
    contact: {
      address: "Bull Temple Road, Basavanagudi, Bangalore - 560019",
      phone: "+91-80-26622130",
      email: "info@bmsce.ac.in",
      website: "www.bmsce.ac.in"
    }
  },


  {
    "id": 9,
    "name": "Ramaiyah Institute Of Technology",
    "location": "Bangalore",
    "imageUrl": require("../../utils/Colleges/1.png"),
    "description": "Established in 1962, Ramaiah Institute of Technology (RIT), formerly known as M.S. Ramaiah Institute of Technology, is one of the top private engineering colleges in India. The institute is affiliated with Visvesvaraya Technological University (VTU) and offers undergraduate, postgraduate, and doctoral programs in various engineering and technology disciplines.",
    
    "schools": [
      {
        "name": "Undergraduate (BE) Programs",
        "description": "The Bachelor of Engineering (BE) programs are designed to provide students with a strong foundation in engineering principles, technical skills, and problem-solving abilities. These programs focus on both theoretical knowledge and practical applications, preparing students for careers in various engineering disciplines.",
        "programs": {
          "undergraduate": [
            { "name": "Civil Engineering", "degree": "BE", "duration": "4 Years" },
            { "name": "Mechanical Engineering", "degree": "BE", "duration": "4 Years" },
            { "name": "Electrical and Electronics Engineering", "degree": "BE", "duration": "4 Years" },
            { "name": "Electronics and Communication Engineering", "degree": "BE", "duration": "4 Years" },
            { "name": "Computer Science and Engineering", "degree": "BE", "duration": "4 Years" },
            { "name": "Information Science and Engineering", "degree": "BE", "duration": "4 Years" },
            { "name": "Chemical Engineering", "degree": "BE", "duration": "4 Years" },
            { "name": "Industrial Engineering and Management", "degree": "BE", "duration": "4 Years" },
            { "name": "Electronics and Instrumentation Engineering", "degree": "BE", "duration": "4 Years" },
            { "name": "Telecommunication Engineering", "degree": "BE", "duration": "4 Years" },
            { "name": "Medical Electronics", "degree": "BE", "duration": "4 Years" },
            { "name": "Biotechnology", "degree": "BE", "duration": "4 Years" }
          ]
        }
      },
      {
        "name": "Postgraduate (PG) Programs",
        "description": "The Postgraduate programs aim to provide advanced knowledge, research opportunities, and specialized skills in various fields of science, technology, and management. These programs equip students with the expertise needed for professional growth and innovation in their respective domains.",
        "programs": {
          "postgraduate": [
            { "name": "M.Tech in Various Specializations", "degree": "M.Tech", "duration": "2 Years" },
            { "name": "Master of Business Administration", "degree": "MBA", "duration": "2 Years" },
            { "name": "Master of Computer Applications", "degree": "MCA", "duration": "2 Years" }
          ]
        }
      },
      {
        "name": "Doctoral (Ph.D.) Programs",
        "description": "The Doctoral programs aim to foster advanced research and innovation in various engineering and technology disciplines. These Ph.D. programs provide students with an opportunity to contribute to academic excellence and industrial advancements through in-depth study, experimentation, and critical analysis.",
        "programs": {
          "doctoral": [
            { "name": "Ph.D. in Civil Engineering", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Mechanical Engineering", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Electrical and Electronics Engineering", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Electronics and Communication Engineering", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Computer Science and Engineering", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Information Science and Engineering", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Chemical Engineering", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Industrial Engineering and Management", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Mathematics", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Physics", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Chemistry", "degree": "Ph.D", "duration": "Varies" },
            { "name": "Ph.D. in Management Studies", "degree": "Ph.D", "duration": "Varies" }
          ]
        }
      }
    ],
    
    "highlights": {
      "established": 1962,
      "ranking": "NAAC A++ Grade",
      "campus": "25 acres",
      "placement": "95% placement rate",
      "facilities": [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    
    "admissionProcess": {
      "entranceExams": ["KCET", "COMEDK", "GATE"],
      "applicationPeriod": "February - July",
      "requiredDocuments": [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    
    "contact": {
      "address": "MSR Nagar, MSRIT Post, Bangalore - 560054, Karnataka, India",
      "phone": "+91-80-23600822",
      "email": "info@msrit.edu",
      "website": "https://www.msrit.edu"
    }
  },

  {
    "id": 10,
    "name": "East Point College of Technology",
    "location": "Bangalore",
    "imageUrl": require("../../utils/Colleges/3.jpeg"),
    "description": "East Point College of Engineering and Technology (EPCET), established in 1999 under the MG Charitable Trust, is a premier institution in East Bangalore offering quality education in various engineering disciplines. Affiliated with Visvesvaraya Technological University (VTU), Belgaum, and approved by AICTE, EPCET is committed to fostering academic excellence and holistic development.",
    "schools": [
      {
        "name": "Undergraduate (BE) Programs",
        "description": "The Bachelor of Engineering (BE) programs at EPCET are designed to provide students with a strong foundation in engineering principles, technical skills, and problem-solving abilities. These programs focus on both theoretical knowledge and practical applications, preparing students for successful careers in various engineering fields.",
        "programs": {
          "undergraduate": [
            { "name": "Computer Science and Engineering", "degree": "BE", "duration": "4 years" },
            { "name": "Electronics and Communication Engineering", "degree": "BE", "duration": "4 years" },
            { "name": "Mechanical Engineering", "degree": "BE", "duration": "4 years" },
            { "name": "Civil Engineering", "degree": "BE", "duration": "4 years" },
            { "name": "Information Science and Engineering", "degree": "BE", "duration": "4 years" },
            { "name": "Electrical and Electronics Engineering", "degree": "BE", "duration": "4 years" }
          ]
        }
      },
      {
        "name": "Postgraduate (M.Tech) Programs",
        "description": "The Master of Technology (M.Tech) programs at EPCET aim to provide advanced knowledge and research opportunities in specialized engineering fields. These programs equip students with the expertise needed for professional growth and innovation in their respective domains.",
        "programs": {
          "postgraduate": [
            { "name": "Computer Science and Engineering", "degree": "M.Tech", "duration": "2 years" },
            { "name": "VLSI Design and Embedded Systems", "degree": "M.Tech", "duration": "2 years" },
            { "name": "Thermal Power Engineering", "degree": "M.Tech", "duration": "2 years" }
          ]
        }
      },
      {
        "name": "Doctoral Programs",
        "description": "EPCET is recognized as a research center by VTU for pursuing PhD programs in various engineering disciplines. The doctoral programs aim to foster advanced research and innovation, contributing to academic excellence and industrial advancements.",
        "programs": {
          "doctoral": [
            { "name": "Computer Science and Engineering", "degree": "PhD", "duration": "Minimum 3 years" },
            { "name": "Electronics and Communication Engineering", "degree": "PhD", "duration": "Minimum 3 years" },
            { "name": "Mechanical Engineering", "degree": "PhD", "duration": "Minimum 3 years" }
          ]
        }
      },
      {
        "name": "Department of Humanities",
        "description": "The Department of Humanities at EPCET provides exceptional language instruction and focuses on developing students' communication skills, critical thinking, and ethical understanding, essential for personal, academic, and professional success.",
        "programs": {
          "subjects": [
            { "name": "English", "details": "Courses aimed at enhancing proficiency in the English language and communication skills." },
            { "name": "Professional Ethics", "details": "Courses designed to instill ethical practices and professional responsibility." }
          ]
        }
      }
    ],
    "highlights": {
      "established": 1999,
      "ranking": "NAAC Accredited",
      "campus": "Jnanaprabha Campus, Bidarahalli, Virgo Nagar Post, Bangalore-560049",
      "placement": "Active placement cell with collaborations with leading companies.",
      "facilities": [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    "admissionProcess": {
      "entranceExams": ["KCET", "COMEDK", "JEE Main"],
      "applicationPeriod": "March - July",
      "requiredDocuments": [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    "contact": {
      "address": "Jnanaprabha Campus, Bidarahalli, Virgo Nagar Post, Bangalore-560049, Karnataka, India",
      "phone": "+91 720 422 9999",
      "email": "admissions@eastpoint.ac.in",
      "website": "https://www.eastpoint.ac.in/"
    }
  },

  {
    "id": 11,
    "name": "BV College Of Engineering",
    "location": "Navi Mumbai, Maharashtra",
    "imageUrl": require("../../utils/Colleges/4.jpeg"),
    "description": "Established in 1990, Bharati Vidyapeeth College of Engineering, Navi Mumbai, is permanently affiliated with the University of Mumbai and approved by the AICTE. The college offers undergraduate and postgraduate programs in various engineering disciplines.",
    "schools": [
      {
        "name": "Undergraduate Programs",
        "description": "The Bachelor of Engineering (BE) programs are designed to provide students with a solid foundation in engineering principles and practices.",
        "programs": {
          "undergraduate": [
            { "name": "Computer Engineering", "degree": "BE", "duration": "4 years" },
            { "name": "Electronics and Telecommunication Engineering", "degree": "BE", "duration": "4 years" },
            { "name": "Mechanical Engineering", "degree": "BE", "duration": "4 years" },
            { "name": "Instrumentation Engineering", "degree": "BE", "duration": "4 years" },
            { "name": "Information Technology", "degree": "BE", "duration": "4 years" },
            { "name": "Civil Engineering", "degree": "BE", "duration": "4 years" }
          ]
        }
      },
      {
        "name": "Postgraduate Programs",
        "description": "The Master of Engineering (ME) programs aim to provide advanced knowledge and research opportunities in specialized engineering fields.",
        "programs": {
          "postgraduate": [
            { "name": "Computer Engineering", "degree": "ME", "duration": "2 years" },
            { "name": "Mechanical Engineering", "degree": "ME", "duration": "2 years" }
          ]
        }
      }
    ],
    "highlights": {
      "established": 1990,
      "ranking": "NAAC Accredited",
      "campus": "CBD Belapur, Sector-7, Navi Mumbai, Maharashtra, India - 400614",
      "placement": "Active placement cell with collaborations with leading companies.",
      "facilities": [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    "admissionProcess": {
      "entranceExams": ["MHT-CET", "JEE Main"],
      "applicationPeriod": "March - July",
      "requiredDocuments": [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    "contact": {
      "address": "CBD Belapur, Sector-7, Navi Mumbai, Maharashtra, India - 400614",
      "phone": "+91-22-27572140, +91-22-27571074",
      "email": "principal.bvcoenm@bharatividyapeeth.edu",
      "website": "https://bvcoenm.edu.in/"
    }
  },

  {
    "id": 12,
    "name": "Jyothishmathi College Of Engineering",
    "location": "Karimnagar, Telangana",
    "imageUrl": require("../../utils/Colleges/6.jpeg"),
    "description": "Established in 1997, Jyothishmathi Institute of Technology and Science (JITS) is an autonomous institution accredited with NAAC 'A' Grade and NBA. Affiliated with Jawaharlal Nehru Technological University, Hyderabad (JNTUH), and approved by AICTE, JITS offers undergraduate and postgraduate programs in various engineering disciplines.",
    "schools": [
      {
        "name": "Undergraduate Programs",
        "description": "The Bachelor of Technology (B.Tech) programs are designed to provide students with a solid foundation in engineering principles and practices.",
        "programs": {
          "undergraduate": [
            { "name": "Artificial Intelligence and Machine Learning", "degree": "B.Tech", "duration": "4 years" },
            { "name": "Electronics and Communications Engineering", "degree": "B.Tech", "duration": "4 years" },
            { "name": "Computer Science & Engineering", "degree": "B.Tech", "duration": "4 years" },
            { "name": "Electrical and Electronics Engineering", "degree": "B.Tech", "duration": "4 years" },
            { "name": "Civil Engineering", "degree": "B.Tech", "duration": "4 years" },
            { "name": "Mechanical Engineering", "degree": "B.Tech", "duration": "4 years" }
          ]
        }
      },
      {
        "name": "Postgraduate Programs",
        "description": "The Master of Technology (M.Tech) programs aim to provide advanced knowledge and research opportunities in specialized engineering fields.",
        "programs": {
          "postgraduate": [
            { "name": "Computer Science & Engineering", "degree": "M.Tech", "duration": "2 years" },
            { "name": "VLSI System Design", "degree": "M.Tech", "duration": "2 years" }
          ]
        }
      },
      {
        "name": "Diploma Programs",
        "description": "Diploma courses designed to provide foundational knowledge and practical skills in specific engineering disciplines.",
        "programs": {
          "diploma": [
            { "name": "Computer Engineering", "degree": "Diploma", "duration": "3 years" },
            { "name": "Electronics and Communications Engineering", "degree": "Diploma", "duration": "3 years" },
            { "name": "Electrical and Electronics Engineering", "degree": "Diploma", "duration": "3 years" }
          ]
        }
      },
      {
        "name": "Management Programs",
        "description": "The Master of Business Administration (MBA) program is designed to equip students with managerial skills and business acumen.",
        "programs": {
          "postgraduate": [
            { "name": "Master of Business Administration", "degree": "MBA", "duration": "2 years" }
          ]
        }
      }
    ],
    "highlights": {
      "established": 1997,
      "ranking": "NAAC Accredited with 'A' Grade",
      "campus": "JITS Rd, Ramakrishna Colony, Karimnagar, Telangana 505527",
      "placement": "Active placement cell with collaborations with leading companies.",
      "facilities": [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    "admissionProcess": {
      "entranceExams": ["TS EAMCET", "GATE", "ICET"],
      "applicationPeriod": "March - July",
      "requiredDocuments": [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    "contact": {
      "address": "JITS Rd, Ramakrishna Colony, Karimnagar, Telangana 505527",
      "phone": "+91-878-222-4444",
      "email": "info@jits.ac.in",
      "website": "https://jits.ac.in/"
    }
  },
  {
    "id": 13,
    "name": "St Joseph College Of Engineering",
    "location": "Bengaluru, Karnataka",
    "imageUrl": require("../../utils/Colleges/8.jpeg"),
    "description": "Established in 1882, St. Joseph's University is a Jesuit institution located in the heart of Bengaluru. It offers a wide range of undergraduate and postgraduate programs across various disciplines.",
    "schools": [
      {
        "name": "School of Engineering",
        "description": "The School of Engineering provides comprehensive education in various engineering disciplines, emphasizing both theoretical knowledge and practical skills.",
        "programs": {
          "undergraduate": [
            { "name": "Computer Science and Engineering", "degree": "B.Tech", "duration": "4 years" },
            { "name": "Electronics and Communication Engineering", "degree": "B.Tech", "duration": "4 years" },
            { "name": "Mechanical Engineering", "degree": "B.Tech", "duration": "4 years" },
            { "name": "Civil Engineering", "degree": "B.Tech", "duration": "4 years" }
          ],
          "postgraduate": [
            { "name": "Computer Science and Engineering", "degree": "M.Tech", "duration": "2 years" },
            { "name": "Electronics and Communication Engineering", "degree": "M.Tech", "duration": "2 years" }
          ]
        }
      }
    ],
    "highlights": {
      "established": 1882,
      "ranking": "NAAC Accredited with 'A++' Grade",
      "campus": "36 Lalbagh Road, Bangalore, Karnataka, India 560027",
      "placement": "Active placement cell with collaborations with leading companies.",
      "facilities": [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    "admissionProcess": {
      "entranceExams": ["Karnataka CET", "COMEDK", "GATE"],
      "applicationPeriod": "March - July",
      "requiredDocuments": [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    "contact": {
      "address": "36 Lalbagh Road, Bangalore, Karnataka, India 560027",
      "phone": "+91-80-2227-4079",
      "email": "admission@sju.edu.in",
      "website": "https://www.sju.edu.in/"
    }
  },
  {
    "id": 14,
    "name": "CMR JSS",
    "location": "Bangalore, Karnataka",
    "imageUrl": require("../../utils/Colleges/9.jpeg"),
    "description": "Established in 2000, CMR Institute of Technology (CMRIT) in Bangalore offers a range of undergraduate and postgraduate programs in engineering and technology.",
    "schools": [
      {
        "name": "School of Engineering and Technology",
        "description": "The School of Engineering and Technology at CMRIT provides comprehensive education in various engineering disciplines, focusing on both theoretical and practical aspects.",
        "programs": {
          "undergraduate": [
            { "name": "Computer Science and Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Electronics and Communication Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Information Science and Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Mechanical Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Civil Engineering", "degree": "B.E.", "duration": "4 years" }
          ],
          "postgraduate": [
            { "name": "Computer Science and Engineering", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "VLSI Design and Embedded Systems", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Thermal Engineering", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Digital Communication", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Software Engineering", "degree": "M.Tech.", "duration": "2 years" }
          ]
        }
      }
    ],
    "highlights": {
      "established": 2000,
      
      "ranking":"",
      "campus": "Spacious campus with modern facilities in Bangalore",
      "placement": "Active placement cell with collaborations with leading companies.",
      "facilities": [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    "admissionProcess": {
      "entranceExams": ["Karnataka CET", "COMEDK", "GATE"],
      "applicationPeriod": "March - July",
      "requiredDocuments": [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    "contact": {
      "address": "132, AECS Layout, ITPL Main Road, Bangalore, Karnataka, India 560037",
      "phone": "+91-80-2852-3784",
      "email": "admissions@cmrit.ac.in",
      "website": "https://www.cmrit.ac.in/"
    }
  },
  {
    "id": 15,
    "name": "Bangalore Institute of Technology",
    "location": "Bangalore, Karnataka",
    "imageUrl": require("../../utils/Colleges/12.jpeg"),
    "description": "Established in 1979 under the auspices of Rajya Vokkaligara Sangha, Bangalore Institute of Technology (BIT) offers a range of undergraduate and postgraduate programs in engineering and technology.",
    "schools": [
      {
        "name": "School of Engineering and Technology",
        "description": "The School of Engineering and Technology at BIT provides comprehensive education in various engineering disciplines, focusing on both theoretical and practical aspects.",
        "programs": {
          "undergraduate": [
            { "name": "Computer Science and Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Electronics and Communication Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Information Science and Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Mechanical Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Civil Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Electrical and Electronics Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Industrial Engineering and Management", "degree": "B.E.", "duration": "4 years" },
            { "name": "Instrumentation Technology", "degree": "B.E.", "duration": "4 years" },
            { "name": "Telecommunication Engineering", "degree": "B.E.", "duration": "4 years" },
            { "name": "Artificial Intelligence and Machine Learning", "degree": "B.E.", "duration": "4 years" }
          ],
          "postgraduate": [
            { "name": "Computer Science and Engineering", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Machine Design", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Digital Electronics and Communication", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Structural Engineering", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "VLSI and Embedded Systems", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Computer Applications", "degree": "MCA", "duration": "3 years" },
            { "name": "Business Administration", "degree": "MBA", "duration": "2 years" }
          ]
        }
      }
    ],
    "highlights": {
      "established": 1979,
      ranking:"",
      
      
      "campus": "Urban campus located on KR Road, VV Puram, Bangalore",
      "placement": "Active placement cell with collaborations with leading companies.",
      "facilities": [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    "admissionProcess": {
      "entranceExams": ["Karnataka CET", "COMEDK", "GATE"],
      "applicationPeriod": "March - July",
      "requiredDocuments": [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    "contact": {
      "address": "KR Road, VV Puram, Bangalore, Karnataka, India 560004",
      "phone": "+91-80-2661-3913",
      "email": "principal@bit-bangalore.edu.in",
      "website": "https://bit-bangalore.edu.in/"
    }
  },
  {
    "id": 16,
    "name": "REVA University",
    "location": "Bangalore, Karnataka",
    "imageUrl": require("../../utils/Colleges/13.jpeg"),
    "description": "Established in 2012 under the REVA University Act, REVA University offers a diverse range of undergraduate, postgraduate, and doctoral programs across various disciplines.",
    "schools": [
      {
        "name": "School of Engineering and Technology",
        "description": "The School of Engineering and Technology at REVA University provides comprehensive education in various engineering disciplines, focusing on both theoretical and practical aspects.",
        "programs": {
          "undergraduate": [
            { "name": "Civil Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Computer Science and Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Electrical and Electronics Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Electronics and Communication Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Mechanical Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Mechatronics Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Computer Science and Information Technology", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Artificial Intelligence and Machine Learning", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Robotics and Automation", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Data Science", "degree": "B.Tech.", "duration": "4 years" }
          ],
          "postgraduate": [
            { "name": "Computer Science and Engineering", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "VLSI and Embedded Systems", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Power Electronics", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Structural Engineering", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Machine Design", "degree": "M.Tech.", "duration": "2 years" }
          ],
          "doctoral": [
            { "name": "Ph.D. in Civil Engineering", "degree": "Ph.D.", "duration": "3-5 years" },
            { "name": "Ph.D. in Computer Science and Engineering", "degree": "Ph.D.", "duration": "3-5 years" },
            { "name": "Ph.D. in Electrical and Electronics Engineering", "degree": "Ph.D.", "duration": "3-5 years" },
            { "name": "Ph.D. in Electronics and Communication Engineering", "degree": "Ph.D.", "duration": "3-5 years" },
            { "name": "Ph.D. in Mechanical Engineering", "degree": "Ph.D.", "duration": "3-5 years" }
          ]
        }
      },
      {
        "name": "School of Architecture",
        "description": "The School of Architecture offers programs that blend creative design with practical application, preparing students for careers in architecture and urban planning.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Architecture", "degree": "B.Arch.", "duration": "5 years" }
          ],
          "postgraduate": [
            { "name": "Master of Architecture in Urban Design", "degree": "M.Arch.", "duration": "2 years" }
          ]
        }
      },
      {
        "name": "School of Management Studies",
        "description": "The School of Management Studies provides comprehensive business education, fostering leadership and entrepreneurial skills among students.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Business Administration", "degree": "BBA", "duration": "3 years" },
            { "name": "Bachelor of Commerce", "degree": "B.Com.", "duration": "3 years" }
          ],
          "postgraduate": [
            { "name": "Master of Business Administration", "degree": "MBA", "duration": "2 years" }
          ]
        }
      },
      {
        "name": "School of Legal Studies",
        "description": "The School of Legal Studies offers programs that provide a deep understanding of legal principles and practices, preparing students for careers in law.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Arts and Bachelor of Law", "degree": "BA LL.B.", "duration": "5 years" },
            { "name": "Bachelor of Business Administration and Bachelor of Law", "degree": "BBA LL.B.", "duration": "5 years" }
          ],
          "postgraduate": [
            { "name": "Master of Law in Business and Corporate Law", "degree": "LL.M.", "duration": "1 year" }
          ]
        }
      }
    ],
    "highlights": {
      "established": 2012,
      ranking:"",
      
      "campus": "45-acre campus located in Kattigenahalli, Yelahanka, Bangalore",
      "placement": "Active placement cell with collaborations with leading companies.",
      "facilities": [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    "admissionProcess": {
      "entranceExams": ["REVA CET", "Karnataka CET", "COMEDK", "GATE"],
      "applicationPeriod": "March - July",
      "requiredDocuments": [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    "contact": {
      "address": "Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bangalore, Karnataka, India 560064",
      "phone": "+91-80-6622-6622",
      "email": "admissions@reva.edu.in",
      "website": "https://www.reva.edu.in/"
    }
  },

  {
    "id": 17,
    "name": "Presidency University",
    "location": "Bangalore, Karnataka",
    "imageUrl": require("../../utils/Colleges/14.jpeg"),
    "description": "Established in 2013, Presidency University in Bangalore offers a range of undergraduate, postgraduate, and doctoral programs across various disciplines, emphasizing innovation and industry-relevant education.",
    "schools": [
      {
        "name": "School of Engineering",
        "description": "The School of Engineering at Presidency University provides comprehensive programs in various engineering disciplines, focusing on practical skills and research.",
        "programs": {
          "undergraduate": [
            { "name": "Civil Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Computer Science and Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Electrical and Electronics Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Electronics and Communication Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Mechanical Engineering", "degree": "B.Tech.", "duration": "4 years" },
            { "name": "Petroleum Engineering", "degree": "B.Tech.", "duration": "4 years" }
          ],
          "postgraduate": [
            { "name": "Computer Science and Engineering", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "VLSI Design and Embedded Systems", "degree": "M.Tech.", "duration": "2 years" },
            { "name": "Structural Engineering", "degree": "M.Tech.", "duration": "2 years" }
          ],
          "doctoral": [
            { "name": "Ph.D. in Engineering", "degree": "Ph.D.", "duration": "3-5 years" }
          ]
        }
      },
      {
        "name": "School of Management",
        "description": "The School of Management offers programs designed to develop leadership and entrepreneurial skills, preparing students for dynamic business environments.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Business Administration", "degree": "BBA", "duration": "3 years" },
            { "name": "Bachelor of Commerce", "degree": "B.Com.", "duration": "3 years" }
          ],
          "postgraduate": [
            { "name": "Master of Business Administration", "degree": "MBA", "duration": "2 years" }
          ],
          "doctoral": [
            { "name": "Ph.D. in Management", "degree": "Ph.D.", "duration": "3-5 years" }
          ]
        }
      },
      {
        "name": "School of Law",
        "description": "The School of Law provides comprehensive legal education, fostering analytical and advocacy skills among students.",
        "programs": {
          "undergraduate": [
            { "name": "Bachelor of Arts and Bachelor of Law", "degree": "BA LL.B.", "duration": "5 years" },
            { "name": "Bachelor of Business Administration and Bachelor of Law", "degree": "BBA LL.B.", "duration": "5 years" }
          ],
          "postgraduate": [
            { "name": "Master of Law in Corporate Law", "degree": "LL.M.", "duration": "1 year" }
          ],
          "doctoral": [
            { "name": "Ph.D. in Law", "degree": "Ph.D.", "duration": "3-5 years" }
          ]
        }
      }
    ],
    "highlights": {
      "established": 2013,
      ranking:"",
      "campus": "110-acre campus located in Yelahanka, Bangalore",
      "placement": "Active placement cell with collaborations with leading companies.",
      "facilities": [
        "Central Library",
        "Research Centers",
        "Innovation Hub",
        "Sports Complex",
        "Hostel Accommodation"
      ]
    },
    "admissionProcess": {
      "entranceExams": ["Presidency University Entrance Test (PUEET)", "Karnataka CET", "COMEDK", "GATE"],
      "applicationPeriod": "March - July",
      "requiredDocuments": [
        "10th Mark Sheet",
        "12th Mark Sheet",
        "Entrance Exam Score Card",
        "Domicile Certificate",
        "Category Certificate (if applicable)"
      ]
    },
    "contact": {
      "address": "Itgalpur Rajanakunte, Yelahanka, Bengaluru, Karnataka 560064",
      "phone": "+91-80-4925-5533",
      "email": "info@presidencyuniversity.in",
      "website": "https://presidencyuniversity.in/"
    }
  }
  
  
  
  
  
  
  
  
  


];