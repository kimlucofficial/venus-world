/* ============================================================
   VENUS GANG RULES 2026 — NỘI DUNG CHO luat-gang.html
   Cùng cấu trúc với data-luat.js: { id, ten, mo, dieu:[{ so, t, n, phat }] }
   Sửa nội dung ở đây, trang tự dựng mục lục và ô tìm kiếm.
   ============================================================ */

var VENUS_LUAT = {
  "nhan": "Phần",
  "capNhat": "29.10.2026",
  "chuong": [
    {
      "id": "pi-quy-dinh-chung",
      "muc": "Quy định chung",
      "ten": "QUY ĐỊNH CHUNG",
      "dieu": [
        {
          "so": "01",
          "t": "Tôn chỉ hoạt động",
          "n": [
            "Gang là một tập thể thống nhất, hoạt động dựa trên tinh thần đoàn kết, kỷ luật và tuân thủ Roleplay (RP).",
            {
              "ds": [
                "Mỗi thành viên có trách nhiệm bảo vệ danh dự, uy tín của Gang.",
                "Gang Leader chịu trách nhiệm tuyển dụng, quản lý và kiểm soát nhân sự.",
                "Mọi hoạt động Gang phải tuân thủ luật thành phố và quy định của BQT.",
                "Nghiêm cấm lợi dụng danh nghĩa Gang để phá hoại trải nghiệm của người chơi khác."
              ]
            }
          ]
        },
        {
          "so": "02",
          "t": "Điều kiện duy trì Gang",
          "n": [
            "Mỗi Gang phải đáp ứng đầy đủ các điều kiện:",
            {
              "ds": [
                "Duy trì tối thiểu 10 thành viên chính thức.",
                "Không được ngừng hoạt động quá 07 ngày liên tiếp.",
                "Mỗi Gang chỉ được sở hữu tối đa 01 doanh nghiệp.",
                "Tuân thủ hệ thống Warning Gang do BQT quy định."
              ]
            }
          ],
          "phat": "Dưới 10 thành viên: Buộc giải thể.\nKhông hoạt động 07 ngày liên tiếp: Buộc giải thể.\nVi phạm giới hạn doanh nghiệp: 01 Sẹo Cá nhân đối với người vi phạm."
        }
      ],
      "mo": "Áp dụng cho toàn bộ Gang, Gang Leader, thành viên Gang và cá nhân tham gia hoạt động liên quan đến Gang."
    },
    {
      "id": "pii-he-thong-seo-ca-nhan-warning-gang",
      "muc": "Sẹo Cá nhân & Warning Gang",
      "ten": "HỆ THỐNG SẸO CÁ NHÂN & WARNING GANG",
      "dieu": [
        {
          "so": "03",
          "t": "Quy định Sẹo Cá nhân",
          "n": [
            "Sẹo Cá nhân áp dụng đối với thành viên trực tiếp vi phạm luật.",
            "Mỗi hành vi vi phạm được ghi nhận theo điều khoản tương ứng. Các hành vi độc lập có thể bị xử lý riêng, nhưng không được xử phạt trùng lặp cùng một hành vi.",
            "THANG XỬ PHẠT CÁ NHÂN",
            {
              "ds": [
                "01 Sẹo: Cảnh cáo chính thức.",
                "02 Sẹo: BAN 03 ngày.",
                "03 Sẹo: BAN vĩnh viễn."
              ]
            },
            "Quy định bổ sung:",
            {
              "ds": [
                "Sẹo được cộng dồn theo hồ sơ người chơi.",
                "Chuyển Gang hoặc rời Gang không làm mất Sẹo.",
                "Sau khi hết thời hạn BAN, số Sẹo vẫn được giữ nguyên.",
                "Khi đạt 03 Sẹo, người chơi bị BAN vĩnh viễn.",
                "Không tự ý xóa Sẹo nếu chưa có quyết định của BQT."
              ]
            }
          ]
        },
        {
          "so": "04",
          "t": "Hệ thống Warning Gang",
          "n": [
            "Warning Gang áp dụng đối với hành vi vi phạm mang tính tập thể, có tổ chức hoặc thuộc trách nhiệm quản lý của Gang.",
            "THANG XỬ PHẠT GANG",
            {
              "ds": [
                "Warning I – 01 điểm: Cảnh cáo Gang.",
                "Warning II – 02 điểm: Cảnh cáo nghiêm trọng, đình chỉ WAR và công nhà trong 48 giờ.",
                "Warning III – 03 điểm: Buộc giải thể Gang."
              ]
            },
            "Nguyên tắc tính Warning:",
            {
              "ds": [
                "Mỗi vi phạm Gang được cộng 01 Warning Point.",
                "Warning được cộng dồn vào hồ sơ Gang.",
                "Đạt 02 điểm sẽ áp dụng hình thức xử lý Warning II.",
                "Đạt 03 điểm sẽ bị buộc giải thể.",
                "Đổi Gang Leader hoặc đổi tên Gang không làm mất Warning.",
                "Cá nhân vi phạm không mặc nhiên khiến Gang bị Warning nếu không có trách nhiệm tập thể.",
                "Một tình huống có thể xử lý cả cá nhân và Gang khi xác định được trách nhiệm riêng biệt."
              ]
            }
          ]
        },
        {
          "so": "05",
          "t": "Nguyên tắc xử lý",
          "n": [
            {
              "ds": [
                "Mọi hình thức xử phạt phải có bằng chứng hợp lệ.",
                "BQT xác định rõ đối tượng và điều khoản vi phạm.",
                "Không xử phạt trùng lặp một hành vi theo nhiều điều khoản.",
                "Trường hợp tái phạm, điểm xử phạt tiếp tục được cộng dồn.",
                "Hành vi nghiêm trọng ngoài phạm vi luật Gang có thể bị xử lý theo luật thành phố."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "piii-trang-phuc-nhan-dien-gang",
      "muc": "Trang phục & nhận diện Gang",
      "ten": "TRANG PHỤC & NHẬN DIỆN GANG",
      "dieu": [
        {
          "so": "06",
          "t": "Trang phục chính thức",
          "n": [
            "Mỗi Gang phải đăng ký trang phục nhận diện riêng.",
            {
              "ds": [
                "Cấm sử dụng hoặc sao chép trang phục chính thức của Gang khác.",
                "Thành viên bắt buộc mặc đúng trang phục khi WAR, công nhà hoặc tham gia sự kiện Gang.",
                "Người không mặc đúng trang phục không được công nhận tư cách tham chiến.",
                "Cấm chia sẻ mã trang phục cho người ngoài nhằm giả mạo hoặc tăng quân số."
              ]
            }
          ],
          "phat": "+01 Warning Gang."
        },
        {
          "so": "07",
          "t": "Nhận diện Gang",
          "n": [
            "Trong các hoạt động Gang, chỉ được xác định tư cách thành viên thông qua trang phục chính thức đã đăng ký.",
            "Nghiêm cấm nhận diện Gang bằng:",
            {
              "ds": [
                "Giọng nói.",
                "Khuôn mặt, kiểu tóc.",
                "Thông tin OOC hoặc các phương thức Non-RP khác."
              ]
            }
          ],
          "phat": "+01 Sẹo Cá nhân."
        }
      ]
    },
    {
      "id": "piv-quyen-han-ung-xu-gang",
      "muc": "Quyền hạn & ứng xử Gang",
      "ten": "QUYỀN HẠN & ỨNG XỬ GANG",
      "dieu": [
        {
          "so": "08",
          "t": "Trách nhiệm liên đới",
          "n": [
            "Gang phải chịu trách nhiệm đối với những hành vi vi phạm được tổ chức, chỉ đạo hoặc thực hiện dưới danh nghĩa Gang.",
            "BQT sẽ xem xét trách nhiệm tập thể dựa trên bằng chứng và mức độ liên quan."
          ],
          "phat": "+01 Warning Gang nếu xác định có trách nhiệm liên đới."
        },
        {
          "so": "09",
          "t": "Bảo vệ danh dự Gang",
          "n": [
            "Gang được phép tạo tình huống RP đối với cá nhân:",
            {
              "ds": [
                "Cố tình giả mạo Gang nhằm gây ảnh hưởng đến uy tín.",
                "Xúc phạm hoặc gây tổn hại danh dự Gang trong tình huống RP hợp lệ.",
                "Có hành vi gây ảnh hưởng trực tiếp đến lợi ích hợp lệ của Gang."
              ]
            },
            "Điều kiện: Phải có lý do RP rõ ràng và bằng chứng xác thực.",
            "Không được lợi dụng quy định này để bắt nạt hoặc gây chiến vô cớ."
          ]
        },
        {
          "so": "10",
          "t": "Giới hạn quyền lực Gang",
          "n": [
            "Nghiêm cấm:",
            {
              "ds": [
                "Ép cư dân vào tình huống RP chỉ vì sử dụng tài sản riêng, kể cả trong khu vực Gang, trừ khi cư dân chủ động tạo tình huống hợp lệ trước.",
                "Lợi dụng quân số để bắt nạt hoặc uy hiếp cư dân.",
                "Truy đuổi, đánh giết hoặc trùng sinh người chơi vô cớ.",
                "Lạm dụng danh nghĩa Gang để ép buộc người khác."
              ]
            }
          ],
          "phat": "Ép RP trái quy định dưới danh nghĩa Gang: +01 Warning Gang.\nCá nhân bắt nạt, uy hiếp hoặc đánh giết vô cớ: +01 Sẹo Cá nhân."
        },
        {
          "so": "11",
          "t": "Văn hóa ứng xử",
          "n": [
            "Thành viên Gang phải tôn trọng các Gang khác và cư dân trong thành phố.",
            "Nghiêm cấm:",
            {
              "ds": [
                "Chửi bới, xúc phạm nghiêm trọng hoặc hạ nhục người khác.",
                "Cố tình kích động mâu thuẫn ngoài RP.",
                "Gây chiến, gạ WAR hoặc công kích Gang khác trên Discord.",
                "Lôi kéo thành viên tham gia tranh cãi tập thể."
              ]
            },
            "Mọi mâu thuẫn phải được giải quyết bằng RP trong game hoặc gửi bằng chứng cho BQT."
          ],
          "phat": "Vi phạm ứng xử cá nhân: +01 Sẹo Cá nhân.\nGây chiến, kích động tập thể trên Discord dưới danh nghĩa Gang: +01 Warning Gang."
        }
      ]
    },
    {
      "id": "pv-nhan-su-chuyen-gang",
      "muc": "Nhân sự & chuyển Gang",
      "ten": "NHÂN SỰ & CHUYỂN GANG",
      "dieu": [
        {
          "so": "12",
          "t": "Quy định nhân sự",
          "n": [
            {
              "ds": [
                "Mỗi người chơi chỉ được tham gia 01 Gang tại cùng một thời điểm.",
                "Cảnh sát và Bác sĩ không được tham gia WAR dưới bất kỳ hình thức nào.",
                "Thành viên tham gia sự kiện Gang phải thuộc danh sách nhân sự chính thức.",
                "Cấm bổ sung người ngoài hoặc thành viên giả nhằm tăng quân số cho sự kiện."
              ]
            }
          ],
          "phat": "Tham gia nhiều Gang hoặc Cảnh sát/Bác sĩ tham gia WAR: +01 Sẹo Cá nhân.\nGang sử dụng nhân sự không hợp lệ trong sự kiện: +01 Warning Gang."
        },
        {
          "so": "13",
          "t": "Thời gian chuyển Gang",
          "n": [
            "Sau khi rời Gang, người chơi bắt buộc phải chờ đủ 48 giờ (02 ngày) mới được gia nhập Gang khác.",
            "Thời gian được tính từ thời điểm chính thức rời Gang cũ.",
            "Quy định áp dụng cho cả trường hợp tự nguyện rời Gang hoặc bị loại khỏi Gang."
          ],
          "phat": "+01 Sẹo Cá nhân."
        }
      ]
    },
    {
      "id": "pvi-khu-vuc-an-toan-giao-tranh",
      "muc": "Khu vực an toàn & giao tranh",
      "ten": "KHU VỰC AN TOÀN & GIAO TRANH",
      "dieu": [
        {
          "so": "14",
          "t": "Safezone và Vùng xanh",
          "n": [
            {
              "ds": [
                "Cấm chạy vào Safezone để né tránh giao tranh đang diễn ra.",
                "Cấm các Gang giao tranh, nổ súng hoặc combat trong Vùng xanh.",
                "Không được lợi dụng khu vực an toàn để cắt đứt tình huống RP hợp lệ."
              ]
            }
          ],
          "phat": "Cá nhân né combat vào Safezone: +01 Sẹo Cá nhân.\nGang giao tranh trong Vùng xanh: +01 Warning Gang."
        },
        {
          "so": "15",
          "t": "Khu nhà Gang và Cảnh sát",
          "n": [
            {
              "ds": [
                "Cấm chạy vào khu nhà Gang để trốn tránh Cảnh sát khi đang bị truy đuổi.",
                "Cấm cố tình dàn dựng tình huống dẫn dụ Cảnh sát hoặc người ngoài vào khu vực đang WAR.",
                "Không được lợi dụng khu nhà Gang để né tránh trách nhiệm RP."
              ]
            }
          ],
          "phat": "Né Cảnh sát vào khu nhà Gang: +01 Sẹo Cá nhân.\nDẫn dụ Cảnh sát vào khu vực WAR: +01 Warning Gang."
        },
        {
          "so": "16",
          "t": "Quy định camp xác",
          "n": [
            "Trong Vùng đỏ, thời gian camp xác tối đa là 30 phút.",
            "Nghiêm cấm cố tình kéo dài thời gian camp xác nhằm gây áp lực hoặc cản trở trải nghiệm của bên thua.",
            "Đối với tình huống công nhà, áp dụng quy định riêng tại Điều 26."
          ],
          "phat": "+01 Warning Gang."
        }
      ]
    },
    {
      "id": "pvii-luat-war-gang",
      "muc": "Luật WAR Gang",
      "ten": "LUẬT WAR GANG",
      "dieu": [
        {
          "so": "17",
          "t": "Điều kiện tổ chức WAR",
          "n": [
            "Mọi cuộc WAR phải đáp ứng đầy đủ các điều kiện:",
            {
              "ds": [
                "Có sự đồng thuận của cả 02 Gang Leader.",
                "Có nguyên nhân RP hợp lệ.",
                "Hai bên thống nhất thời gian, địa điểm giao tranh.",
                "Có thông báo rõ ràng cho Gang đối phương."
              ]
            },
            "Nghiêm cấm tự ý WAR khi chưa đáp ứng các điều kiện trên."
          ],
          "phat": "+01 Warning Gang."
        },
        {
          "so": "18",
          "t": "Bảo mật thông tin WAR",
          "n": [
            "Trong quá trình WAR, nghiêm cấm tiết lộ cho Cảnh sát:",
            {
              "ds": [
                "Thời gian và địa điểm giao tranh.",
                "Vị trí hoặc quân số của đối phương.",
                "Kế hoạch và thông tin chiến thuật.",
                "Những thông tin nhằm tạo lợi thế không hợp lệ."
              ]
            }
          ],
          "phat": "+01 Warning Gang."
        },
        {
          "so": "19",
          "t": "Cooldown WAR",
          "n": [
            "Sau khi tấn công hoặc tuyên chiến với một Gang, bên khởi xướng phải chờ đủ 48 giờ trước khi tiếp tục tổ chức WAR mới nhằm vào chính Gang đó.",
            "Nghiêm cấm liên tục tuyên chiến nhằm gây áp lực hoặc quấy rối một Gang."
          ],
          "phat": "+01 Warning Gang."
        },
        {
          "so": "20",
          "t": "Giới hạn Gang tham chiến",
          "n": [
            "Mỗi cuộc WAR chỉ được phép có 02 Gang tham gia.",
            "Nghiêm cấm:",
            {
              "ds": [
                "Gang thứ ba can thiệp giao tranh.",
                "Hỗ trợ chiến đấu cho Gang không liên quan.",
                "Cố tình phá hoại cuộc WAR của hai Gang khác.",
                "Sử dụng danh nghĩa Gang để tham gia chiến tranh ngoài tổ chức."
              ]
            }
          ],
          "phat": "Gang thứ ba can thiệp: +01 Warning Gang.\nThành viên tự ý tham chiến dưới danh nghĩa Gang: Buộc rời Gang và +01 Warning Gang đối với Gang có trách nhiệm quản lý."
        },
        {
          "so": "21",
          "t": "Cấm thuê hoặc mượn người WAR",
          "n": [
            "Gang không được thuê, mượn hoặc nhờ người ngoài tham gia WAR.",
            "Nghiêm cấm:",
            {
              "ds": [
                "Cho người ngoài mặc trang phục Gang để tham chiến.",
                "Sử dụng thành viên giả.",
                "Mượn quân số từ Gang khác.",
                "Nhờ người ngoài hỗ trợ giao tranh dưới bất kỳ hình thức nào."
              ]
            }
          ],
          "phat": "+01 Warning Gang."
        }
      ]
    },
    {
      "id": "pviii-luat-cong-nha-gang",
      "muc": "Luật công nhà Gang",
      "ten": "LUẬT CÔNG NHÀ GANG",
      "dieu": [
        {
          "so": "22",
          "t": "Điều kiện công nhà",
          "n": [
            "Mọi tình huống công nhà bắt buộc phải xuất phát từ nguyên nhân RP hợp lệ.",
            "Không được tự ý tấn công khu nhà Gang khác khi chưa có tình huống RP rõ ràng."
          ],
          "phat": "+01 Warning Gang."
        },
        {
          "so": "23",
          "t": "Số lượng Gang tham chiến",
          "n": [
            "Mỗi tình huống công nhà chỉ được phép có 02 Gang:",
            {
              "ds": [
                "01 Gang tấn công.",
                "01 Gang phòng thủ."
              ]
            },
            "Nghiêm cấm Gang thứ ba can thiệp hoặc hỗ trợ bất kỳ bên nào."
          ],
          "phat": "+01 Warning Gang."
        },
        {
          "so": "24",
          "t": "Trang phục khi công nhà",
          "n": [
            "Thành viên bắt buộc phải mặc trang phục Gang chính thức.",
            "Người không mặc đúng trang phục hoặc không thuộc danh sách nhân sự chính thức không được tham gia công nhà."
          ],
          "phat": "Cá nhân tham gia sai trang phục: +01 Sẹo Cá nhân.\nGang cố tình sử dụng người ngoài: +01 Warning Gang."
        },
        {
          "so": "25",
          "t": "Nhân sự tham chiến",
          "n": [
            "Chỉ thành viên chính thức của hai Gang liên quan mới được tham gia công nhà.",
            "Cấm thuê người, mượn người hoặc sử dụng thành viên Gang khác nhằm tăng quân số."
          ],
          "phat": "+01 Warning Gang."
        },
        {
          "so": "26",
          "t": "Thời gian camp xác khi công nhà",
          "n": [
            "Bên chiến thắng được phép camp xác bên thua tối đa 30 phút sau giao tranh.",
            "Quy định cụ thể:",
            {
              "ds": [
                "1. Thời gian bắt đầu tính từ khi bên thắng thiết lập quyền kiểm soát sau giao tranh.",
                "2. Nếu bên thua tổ chức cứu người nhưng thất bại, thời gian camp xác được tính lại 30 phút kể từ thời điểm cứu thất bại.",
                "3. Nếu không có tình huống cứu thất bại hợp lệ, thời gian camp xác không được gia hạn.",
                "4. Nghiêm cấm cố tình kéo dài thời gian camp xác trái quy định."
              ]
            }
          ],
          "phat": "+01 Warning Gang."
        }
      ]
    },
    {
      "id": "pix-tong-hop-hinh-thuc-xu-phat",
      "muc": "Tổng hợp hình thức xử phạt",
      "ten": "TỔNG HỢP HÌNH THỨC XỬ PHẠT",
      "dieu": [
        {
          "so": "A",
          "t": "Sẹo Cá nhân",
          "n": [
            {
              "ds": [
                "01 Sẹo: Cảnh cáo chính thức",
                "02 Sẹo: BAN 03 ngày",
                "03 Sẹo: BAN vĩnh viễn"
              ]
            },
            "Các hành vi áp dụng Sẹo Cá nhân:",
            {
              "ds": [
                "Non-RP nhận diện Gang.",
                "Chuyển Gang khi chưa đủ 48 giờ.",
                "Tham gia nhiều Gang cùng lúc.",
                "Cảnh sát hoặc Bác sĩ tham gia WAR.",
                "Bắt nạt, uy hiếp hoặc đánh giết cư dân vô cớ.",
                "Né giao tranh vào Safezone.",
                "Né Cảnh sát vào khu nhà Gang.",
                "Tham gia công nhà sai trang phục.",
                "Vi phạm giới hạn doanh nghiệp.",
                "Xúc phạm, chửi bới nghiêm trọng."
              ]
            }
          ]
        },
        {
          "so": "B",
          "t": "Warning Gang",
          "n": [
            {
              "ds": [
                "Warning I – 01 điểm: Cảnh cáo Gang",
                "Warning II – 02 điểm: Đình chỉ WAR và công nhà 48 giờ",
                "Warning III – 03 điểm: Buộc giải thể Gang"
              ]
            },
            "Các hành vi áp dụng Warning Gang:",
            {
              "ds": [
                "Sử dụng hoặc chia sẻ trang phục Gang trái phép.",
                "Sử dụng nhân sự không hợp lệ trong hoạt động Gang.",
                "Gây chiến, kích động tập thể trên Discord.",
                "Ép RP trái quy định dưới danh nghĩa Gang.",
                "Giao tranh trong Vùng xanh.",
                "Dẫn dụ Cảnh sát vào khu vực WAR.",
                "Camp xác quá thời gian quy định.",
                "Tổ chức WAR khi chưa có sự đồng thuận.",
                "WAR không có tình huống RP hợp lệ.",
                "Vi phạm cooldown WAR 48 giờ.",
                "Gang thứ ba can thiệp giao tranh.",
                "Thuê, mượn người ngoài tham chiến.",
                "Công nhà không có tình huống RP.",
                "Vi phạm các quy định tổ chức và giao tranh khác được xác định tại bộ luật."
              ]
            }
          ]
        },
        {
          "so": "C",
          "t": "Điều kiện giải thể Gang",
          "n": [
            "Gang sẽ bị buộc giải thể khi thuộc một trong các trường hợp:",
            {
              "ds": [
                "Tích lũy đủ 03 Warning Points.",
                "Không hoạt động trong 07 ngày liên tiếp.",
                "Số lượng thành viên chính thức dưới 10 người."
              ]
            },
            "Chỉ cần thuộc một trong ba trường hợp trên, Gang sẽ bị áp dụng hình thức giải thể."
          ]
        }
      ]
    },
    {
      "id": "px-quy-dinh-thuc-thi",
      "muc": "Quy định thực thi",
      "ten": "QUY ĐỊNH THỰC THI",
      "dieu": [
        {
          "so": "27",
          "t": "Bằng chứng vi phạm",
          "n": [
            "Mọi tố cáo phải có bằng chứng hợp lệ như video, hình ảnh hoặc dữ liệu hệ thống.",
            "BQT có quyền từ chối xử lý những trường hợp thiếu bằng chứng hoặc không đủ căn cứ xác minh."
          ]
        },
        {
          "so": "28",
          "t": "Nguyên tắc cộng Sẹo và Warning",
          "n": [
            {
              "ds": [
                "Mỗi hành vi vi phạm được xử lý theo điều khoản tương ứng.",
                "Các hành vi độc lập có thể bị cộng điểm riêng.",
                "Không xử phạt trùng lặp một hành vi.",
                "Sẹo Cá nhân và Warning Gang được quản lý độc lập.",
                "BQT phải xác định rõ trách nhiệm trước khi áp dụng xử phạt.",
                "Khi tổng điểm đạt ngưỡng xử lý, áp dụng hình thức tương ứng với ngưỡng cao nhất đã đạt."
              ]
            }
          ]
        },
        {
          "so": "29",
          "t": "Quản lý hồ sơ vi phạm",
          "n": [
            "Mọi hình thức xử phạt phải được ghi nhận với các thông tin:",
            {
              "ds": [
                "Tên người chơi hoặc tên Gang vi phạm.",
                "Thời gian và nội dung vi phạm.",
                "Điều khoản áp dụng.",
                "Bằng chứng xác minh.",
                "Số Sẹo hoặc Warning được cộng.",
                "Tổng điểm tích lũy và hình thức xử lý."
              ]
            },
            "Sẹo Cá nhân và Warning Gang không tự động được xóa theo thời gian.",
            "Việc điều chỉnh hoặc hủy bỏ hình phạt phải có quyết định chính thức từ BQT."
          ]
        },
        {
          "so": "30",
          "t": "Khiếu nại và giải quyết tranh chấp",
          "n": [
            "Cá nhân hoặc Gang có quyền khiếu nại quyết định xử phạt thông qua kênh hỗ trợ chính thức.",
            "Khiếu nại phải kèm theo bằng chứng và nội dung trình bày rõ ràng.",
            "BQT có trách nhiệm xem xét, đối chiếu bằng chứng và đưa ra kết luận cuối cùng."
          ]
        },
        {
          "so": "31",
          "t": "Trách nhiệm của Gang Leader",
          "n": [
            "Gang Leader có trách nhiệm:",
            {
              "ds": [
                "Phổ biến luật cho toàn bộ thành viên.",
                "Quản lý danh sách nhân sự chính thức.",
                "Kiểm soát hoạt động WAR và công nhà.",
                "Phối hợp với BQT khi xảy ra vi phạm.",
                "Chịu trách nhiệm đối với các hành vi vi phạm có tính chất tổ chức."
              ]
            },
            "Việc không đọc hoặc không nắm rõ luật không được xem là lý do miễn trừ trách nhiệm."
          ]
        },
        {
          "so": "32",
          "t": "Hiệu lực bộ luật",
          "n": [
            "Bộ luật VENUS GANG RULES 2026 áp dụng đối với toàn bộ Gang thuộc VENUS WORLD – PVP ROLEPLAY.",
            "Những tình huống chưa được quy định cụ thể sẽ do BQT xem xét dựa trên luật thành phố, nguyên tắc RP và bằng chứng thực tế.",
            "Mọi thay đổi, bổ sung hoặc điều chỉnh phải được thông báo qua kênh chính thức của thành phố."
          ]
        }
      ]
    }
  ]
};
