/* ============================================================
   VENUS AIRDROP RULES 2026 — NỘI DUNG CHO luat-airdrop.html
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
          "t": "Mục đích sự kiện",
          "n": [
            "Airdrop là sự kiện tranh đoạt vật phẩm được tổ chức tại những khu vực do hệ thống hoặc BQT chỉ định.",
            "Người chơi được phép giao tranh trong phạm vi sự kiện nhằm giành quyền tiếp cận và chiếm lấy hòm Airdrop.",
            "Mục tiêu cuối cùng là chiếm đoạt thành công phần thưởng trong hòm Airdrop, không phải tiêu diệt toàn bộ người tham gia."
          ]
        },
        {
          "so": "02",
          "t": "Phân loại Airdrop",
          "n": [
            "Sự kiện gồm hai hình thức:",
            "1. AIRDROP TỰ DO",
            {
              "ds": [
                "Mở cho toàn bộ cư dân đủ điều kiện tham gia.",
                "Người chơi được phép tranh đoạt độc lập hoặc phối hợp theo quy định sự kiện.",
                "Người lấy thành công phần thưởng từ hòm là người chiến thắng."
              ]
            },
            "2. AIRDROP GANG",
            {
              "ds": [
                "Dành riêng cho các Gang chính thức.",
                "Thành viên phải mặc trang phục Gang đã đăng ký.",
                "Các Gang được phép giao tranh để tranh quyền chiếm hòm.",
                "Gang có thành viên lấy thành công phần thưởng là Gang chiến thắng."
              ]
            }
          ]
        },
        {
          "so": "03",
          "t": "Phạm vi giao tranh",
          "n": [
            {
              "ds": [
                "Chỉ được phép giao tranh trong khu vực Airdrop do hệ thống hoặc BQT xác định.",
                "Không được lợi dụng sự kiện để tấn công cư dân ngoài phạm vi giao tranh.",
                "Khi sự kiện kết thúc, mọi hành vi giao tranh dựa trên Airdrop phải chấm dứt.",
                "Không được tiếp tục truy đuổi hoặc trả thù người tham gia sau sự kiện nếu không có tình huống RP độc lập hợp lệ."
              ]
            }
          ],
          "phat": "01 Sẹo Cá nhân hoặc 01 Warning Gang tùy trách nhiệm vi phạm."
        }
      ],
      "mo": "Áp dụng cho toàn bộ cư dân và Gang tham gia sự kiện Airdrop."
    },
    {
      "id": "pii-quy-dinh-tham-gia-airdrop",
      "muc": "Quy định tham gia Airdrop",
      "ten": "QUY ĐỊNH THAM GIA AIRDROP",
      "dieu": [
        {
          "so": "04",
          "t": "Điều kiện tham gia",
          "n": [
            {
              "ds": [
                "Người chơi phải có mặt trực tiếp trong khu vực sự kiện.",
                "Không sử dụng phần mềm gian lận hoặc lợi dụng lỗi game.",
                "Không được sử dụng tài khoản phụ nhằm tạo lợi thế.",
                "Phải tuân thủ hướng dẫn và thông báo của BQT."
              ]
            }
          ]
        },
        {
          "so": "05",
          "t": "Quy định giao tranh",
          "n": [
            "Trong thời gian Airdrop diễn ra, người chơi được phép:",
            {
              "ds": [
                "Sử dụng vũ khí được sự kiện cho phép.",
                "Tấn công đối thủ đang tham gia tranh đoạt.",
                "Phòng thủ, kiểm soát khu vực và ngăn cản đối phương tiếp cận hòm.",
                "Phối hợp chiến thuật trong phạm vi quy định."
              ]
            },
            "Nghiêm cấm:",
            {
              "ds": [
                "Sử dụng hack, cheat, exploit hoặc bug.",
                "Lợi dụng vị trí lỗi, xuyên vật thể hoặc khu vực không thể bị tấn công.",
                "Cố tình phá hoại sự kiện bằng hành vi ngoài RP.",
                "Can thiệp bằng công cụ quản trị hoặc quyền hạn không hợp lệ."
              ]
            }
          ],
          "phat": "Theo mức độ vi phạm và luật thành phố; hành vi nghiêm trọng có thể bị BAN trực tiếp."
        },
        {
          "so": "06",
          "t": "Quy định hồi sinh và quay lại sự kiện",
          "n": [
            {
              "ds": [
                "Người chơi bị hạ gục phải tuân thủ cơ chế hồi sinh của máy chủ.",
                "Không được sử dụng lỗi hồi sinh, dịch chuyển hoặc phương thức bất hợp lệ để quay lại khu vực.",
                "Việc quay lại tham chiến sau hồi sinh chỉ được phép khi cơ chế sự kiện và luật thành phố cho phép.",
                "Không được lợi dụng cơ chế hồi sinh để liên tục quấy rối đối phương."
              ]
            }
          ],
          "phat": "01 Sẹo Cá nhân đối với hành vi vi phạm thông thường; hành vi lợi dụng lỗi nghiêm trọng xử lý theo luật thành phố."
        }
      ]
    },
    {
      "id": "piii-luat-airdrop-tu-do",
      "muc": "Luật Airdrop Tự Do",
      "ten": "LUẬT AIRDROP TỰ DO",
      "dieu": [
        {
          "so": "07",
          "t": "Quyền tham gia",
          "n": [
            "Airdrop Tự Do cho phép toàn bộ cư dân tham gia tranh đoạt, không phân biệt nghề nghiệp hoặc Gang.",
            "Mọi người chơi tham gia phải tuân thủ cùng một bộ quy định."
          ]
        },
        {
          "so": "08",
          "t": "Quy định tranh đoạt",
          "n": [
            {
              "ds": [
                "Người chơi được phép tranh giành hòm trong thời gian sự kiện hoạt động.",
                "Không bắt buộc phải tiêu diệt toàn bộ đối thủ mới được mở hòm.",
                "Không được sử dụng lỗi game để mở hòm từ khoảng cách hoặc vị trí không hợp lệ.",
                "Không được ngăn cản người khác bằng những hành vi nằm ngoài cơ chế PVP của sự kiện."
              ]
            }
          ]
        },
        {
          "so": "09",
          "t": "Xác định người chiến thắng",
          "n": [
            "Người chơi mở hòm và nhận thành công phần thưởng từ hệ thống là người chiến thắng.",
            {
              "ds": [
                "Không tính chiến thắng dựa trên số mạng hạ gục.",
                "Không tính theo người đầu tiên tiếp cận hòm.",
                "Không tính theo người kiểm soát khu vực lâu nhất.",
                "Trường hợp có tranh chấp, kết quả được xác định theo dữ liệu hệ thống."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "piv-luat-airdrop-gang",
      "muc": "Luật Airdrop Gang",
      "ten": "LUẬT AIRDROP GANG",
      "dieu": [
        {
          "so": "10",
          "t": "Điều kiện tham gia Gang",
          "n": [
            {
              "ds": [
                "Chỉ thành viên chính thức thuộc Gang được tham gia.",
                "Bắt buộc mặc đúng trang phục Gang đã đăng ký.",
                "Không được thuê, mượn hoặc sử dụng người ngoài Gang để hỗ trợ.",
                "Không được giả mạo thành viên Gang khác.",
                "Không được chia sẻ trang phục nhằm tăng quân số."
              ]
            }
          ],
          "phat": "01 Warning Gang đối với Gang vi phạm."
        },
        {
          "so": "11",
          "t": "Quy định giao tranh giữa các Gang",
          "n": [
            {
              "ds": [
                "Các Gang được phép giao tranh trong khu vực Airdrop.",
                "Không áp dụng giới hạn chỉ 02 Gang như WAR hoặc công nhà.",
                "Các Gang tham gia phải tuân thủ phạm vi giao tranh được công bố.",
                "Không được lợi dụng sự kiện để tổ chức WAR ngoài phạm vi Airdrop.",
                "Không được tấn công người không tham gia sự kiện ở bên ngoài khu vực."
              ]
            }
          ],
          "phat": "01 Warning Gang."
        },
        {
          "so": "12",
          "t": "Cấm gian lận quân số",
          "n": [
            "Nghiêm cấm:",
            {
              "ds": [
                "Mượn thành viên Gang khác để tham gia.",
                "Sử dụng người ngoài mặc trang phục Gang.",
                "Dùng tài khoản phụ để tăng quân số.",
                "Cố tình giả danh thành viên nhằm qua mặt BQT."
              ]
            }
          ],
          "phat": "01 Warning Gang; cá nhân liên quan có thể bị xử lý bổ sung nếu vi phạm luật thành phố."
        },
        {
          "so": "13",
          "t": "Xác định Gang chiến thắng",
          "n": [
            "Gang được công nhận chiến thắng khi một thành viên chính thức của Gang mở và nhận thành công phần thưởng từ hòm Airdrop.",
            {
              "ds": [
                "Không tính theo tổng số mạng hạ gục.",
                "Không tính theo số lượng thành viên còn sống.",
                "Không tính theo Gang đầu tiên đến khu vực.",
                "Kết quả cuối cùng dựa trên dữ liệu nhận thưởng của hệ thống."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "pv-hanh-vi-bi-nghiem-cam",
      "muc": "Hành vi bị nghiêm cấm",
      "ten": "HÀNH VI BỊ NGHIÊM CẤM",
      "dieu": [
        {
          "so": "14",
          "t": "Lợi dụng khu vực an toàn",
          "n": [
            "Nghiêm cấm:",
            {
              "ds": [
                "Chạy vào Safezone để né giao tranh đang diễn ra.",
                "Tấn công từ bên trong khu vực an toàn ra ngoài.",
                "Lợi dụng ranh giới sự kiện để tạo lợi thế không hợp lệ."
              ]
            }
          ],
          "phat": "01 Sẹo Cá nhân."
        },
        {
          "so": "15",
          "t": "Can thiệp và phá hoại sự kiện",
          "n": [
            "Nghiêm cấm:",
            {
              "ds": [
                "Người không tham gia cố tình phá hoại Airdrop.",
                "Sử dụng phương tiện hoặc vật thể để chặn hòm bằng lỗi game.",
                "Cố tình làm hòm không thể tương tác.",
                "Lợi dụng lỗi hệ thống để nhận thưởng nhiều lần.",
                "Can thiệp hoặc chỉnh sửa kết quả sự kiện trái phép."
              ]
            }
          ],
          "phat": "Theo luật thành phố; Gang tổ chức hành vi vi phạm có thể nhận 01 Warning Gang."
        },
        {
          "so": "16",
          "t": "Ứng xử sau sự kiện",
          "n": [
            {
              "ds": [
                "Không được xúc phạm hoặc khiêu khích người thua bằng hành vi vượt giới hạn RP.",
                "Không được tiếp tục giao tranh chỉ vì mâu thuẫn phát sinh từ Airdrop sau khi sự kiện đã kết thúc.",
                "Không được sử dụng kết quả Airdrop làm lý do tự động tuyên chiến với Gang khác."
              ]
            }
          ],
          "phat": "01 Sẹo Cá nhân hoặc 01 Warning Gang tùy hành vi."
        }
      ]
    },
    {
      "id": "pvi-xu-phat-giai-quyet-tranh-chap",
      "muc": "Xử phạt & giải quyết tranh chấp",
      "ten": "XỬ PHẠT & GIẢI QUYẾT TRANH CHẤP",
      "dieu": [
        {
          "so": "17",
          "t": "Áp dụng hệ thống xử phạt",
          "n": [
            "SẸO CÁ NHÂN",
            {
              "ds": [
                "01 Sẹo: Cảnh cáo chính thức.",
                "02 Sẹo: BAN 03 ngày.",
                "03 Sẹo: BAN vĩnh viễn."
              ]
            },
            "WARNING GANG",
            {
              "ds": [
                "Warning I – 01 điểm: Cảnh cáo Gang.",
                "Warning II – 02 điểm: Đình chỉ WAR và công nhà 48 giờ.",
                "Warning III – 03 điểm: Buộc giải thể Gang."
              ]
            },
            "Mỗi hành vi vi phạm thông thường được cộng 01 Sẹo Cá nhân hoặc 01 Warning Gang theo trách nhiệm tương ứng.",
            "Các hành vi gian lận nghiêm trọng có thể bị xử lý trực tiếp theo luật thành phố."
          ]
        },
        {
          "so": "18",
          "t": "Bằng chứng và khiếu nại",
          "n": [
            {
              "ds": [
                "Mọi tố cáo phải có bằng chứng rõ ràng.",
                "BQT có quyền kiểm tra dữ liệu hệ thống để xác minh kết quả.",
                "Không xử phạt khi chưa có đủ căn cứ.",
                "Không cộng nhiều hình phạt cho cùng một hành vi nếu không có trách nhiệm vi phạm độc lập.",
                "Quyết định xử lý cuối cùng thuộc về BQT."
              ]
            }
          ]
        },
        {
          "so": "19",
          "t": "Hiệu lực thi hành",
          "n": [
            "Bộ luật áp dụng cho toàn bộ sự kiện Airdrop thuộc VENUS WORLD – PVP ROLEPLAY 2026.",
            "Các quy định riêng của từng đợt Airdrop phải được thông báo trước khi sự kiện bắt đầu.",
            "Trường hợp phát sinh ngoài quy định, BQT sẽ xem xét dựa trên luật thành phố, tính công bằng và diễn biến thực tế."
          ]
        }
      ]
    }
  ]
};
