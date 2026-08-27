/* ============================================================
   LUẬT VENUS WORLD — ĐÂY LÀ FILE DUY NHẤT CẦN SỬA ĐỂ ĐĂNG LUẬT
   ------------------------------------------------------------
   Mỗi chương:  { id, ten, mo (bỏ được), dieu: [...] }
   Mỗi điều:    { so, t, n, phat (bỏ được) }
     so   : số điều hiện trong vòng tròn, ví dụ "3.1"
     t    : tiêu đề rút gọn hiện khi chưa mở
     n    : nội dung, mỗi phần tử là một đoạn
            có thể chèn { ds:["gạch đầu dòng 1","gạch đầu dòng 2"] }
     phat : cột xử phạt, xuống dòng bằng \n

   Thêm chương mới: copy nguyên khối { ... }, dán vào mảng chuong,
   đổi id cho khác các chương đang có. Mục lục tự cập nhật.
   ============================================================ */

var VENUS_LUAT = {

  capNhat: "27.08.2026",

  chuong: [

    /* ---------- Chương 1 ---------- */
    {
      id  : "c1-quy-dinh-cua-canh-sat",
      ten : "QUY ĐỊNH CỦA CẢNH SÁT",
      dieu: [
        {
          so: "1.1",
          t : "Người đi cướp cũng như cảnh sát tuyệt đối tuân thủ roleplay",
          n : ["- Người đi cướp cũng như cảnh sát tuyệt đối tuân thủ roleplay"],
          phat: "+ Phạt band 3 ngày nếu vi phạm"
        },
        {
          so: "1.2",
          t : "Còi 1: Truy đuổi theo dấu (không chặn đường bay, đường tẩu thoát) =…",
          n : [
            "- Còi 1: Truy đuổi theo dấu (không chặn đường bay, đường tẩu thoát) = 00 - 05 phút .",
            "- Còi 2: Được phép Ép xe từ 2 phía (được phép chặn đường bay, đường tẩu thoát) = 05 - 7 phút đối với vi phạm dưới 3 sao và = 5 - 10 phút đối với vi phạm từ 3 sao trở lên.",
            "- Còi 3: Dưới 3 sao = từ 7 phút - Từ 3 sao trở lên = từ 10 phút: Sử dụng súng điện để DB lốp xe - Hạ Móc kéo: Dưới 3 sao = 10 phút - Từ 3 sao trở lên = 13 phút+ Sau khi đã móc thành công xe đối tượng mà đối tượng tiếp tục ngồi trên xe để có hành vi trống đối không đầu hàng, lôi xe ban nghành, công an phải nhắc nhở đầu hàng 2 lần trong 30s mà vẫn tiếp tục ngồi trên xe không đầu hàng công an được phép db súng điện từ ngoài xe vào vị trí người ngồi ở vị trí ghế lái để áp chế. (trường hợp này công an cần setup 1 người điều khiển xe có gắn móc để kìm đối tượng 1 rời khỏi xe để thực hiện hành vi db súng điện tội phạm ở vị trí ghế lái)"
          ],
          phat: "+ Vi phạm phạt: phải chịu phí phạt của người đi cướp, hủy tình huống; tái phạm 3 lần sẽ bị cho ra khỏi ngành, đưa vào blacklist các ngành nhà trực thuộc Nhà Xanh."
        },
        {
          so: "1.3",
          t : "Luật tương tác: Khi bị khống chế phương tiện bắt buộc phải xuống…",
          n : ["- Luật tương tác: Khi bị khống chế phương tiện bắt buộc phải xuống xe, bật mic thực hiện giao tiếp với công an; Công an cũng phải xuống xe để giao tiếp và thực hiện còng, bắt dữ. Nếu trường hợp bị khống chế xe, hư xe, lật xe người cướp cố tình bỏ chạy hoặc khóa cửa ngồi yên trên xe và không giao tiếp công an có quyền bắn súng điện để khống chế"],
          phat: "+ Phạt: x2 số tiền vi phạm"
        },
        {
          so: "1.4",
          t : "Luật Dùng trực thăng Công An",
          n : ["- Luật Dùng trực thăng Công An"],
          phat: "+ Công an chỉ được dùng tối đa 01 trực Thăng trong 01 vụ cướp từ 3 sao trở lên."
        },
        {
          so: "1.5",
          t : "Các phương tiện tham gia trong các vụ cướp đều bị tịch thu + kiểm…",
          n : ["- Các phương tiện tham gia trong các vụ cướp đều bị tịch thu + kiểm tra cốp và tịch thu mọi vật phẩm bẩn nếu có."],
          phat: "+ Không sử phạt + trả ngay sau khi sử án + thụ án xong."
        },
        {
          so: "1.6",
          t : "Công dân tẩu thoát xuống nước, dùng thuyền để chạy trốn",
          n : ["- Công dân tẩu thoát xuống nước, dùng thuyền để chạy trốn"],
          phat: "+ Công an được quyền còng trực tiếp nếu tiếp cận được với đối tượng\n+ Công an được phép sử dụng các phương tiện, công cụ hỗ trợ dưới nước (bình lặn) để tiếp tục truy đuổi.\n* Được phép trưng dụng tối đa 01 thuyền hỗ trợ\n* Sử dụng trực thăng để hỗ trợ trong trường hợp cướp sử dụng 02 phương tiện hoặc cướp 3 sao trở lên"
        },
        {
          so: "1.7",
          t : "Xuống xe chạy bộ, tiếp tục tẩu thoát",
          n : ["- Xuống xe chạy bộ, tiếp tục tẩu thoát"],
          phat: "+ Phạt thêm: 200$ - 300$/1 trường hợp"
        },
        {
          so: "1.8",
          t : "Sau 10 phút đối với các vụ cướp dưới 3 sao và sau 20 phút đối với…",
          n : ["Sau 10 phút đối với các vụ cướp dưới 3 sao và sau 20 phút đối với các vụ cướp trên 3 sao công an mất dấu hoàn toàn đối tượng cướp tình huống coi như mission failed và không được tiếp tục sử dụng tình huống cũ để truy đuổi, hoặc kiểm tra dưới dạng tình nghi"],
          phat: "Công an cố vi phạm = phạt 100.000$/lần\nTái phạm nhiều (quá 3 lần) lần và bị người dân tố cáo = đình chỉ công việc"
        }
      ]
    },

    /* ---------- Chương 2 ---------- */
    {
      id  : "c2-quy-dinh-canh-sat-hinh-su",
      ten : "QUY ĐỊNH CẢNH SÁT HÌNH SỰ",
      dieu: [
        {
          so: "2.1",
          t : "Cảnh sát Hình sự được quyền off duty hoặc on duty và mặc đồ dân sự…",
          n : ["- Cảnh sát Hình sự được quyền off duty hoặc on duty và mặc đồ dân sự (thường phục) để chà trộn vào vụ án mật phục và báo cáo về cơ quan khi xảy ra xung đột khẩn cấp."]
        },
        {
          so: "2.2",
          t : "Cảnh sát Hình sự khi làm nhiệm vụ phải được sự Chỉ đạo trực tiếp từ…",
          n : ["- Cảnh sát Hình sự khi làm nhiệm vụ phải được sự Chỉ đạo trực tiếp từ cấp đội trưởng trở lên hiện còn công tác tại Sở Cảnh sát."]
        },
        {
          so: "2.3",
          t : "Cảnh sát Hình sự chỉ được hỗ trợ còng tội phạm khi có sự có mặt của…",
          n : ["- Cảnh sát Hình sự chỉ được hỗ trợ còng tội phạm khi có sự có mặt của tối thiểu 02 đồng chí công an đang trong ca và mặc quân phục"],
          phat: "+ Vi phạm\n+ Lần 1: Đình chỉ công tác 3 ngày và bồi thường tiền cho người dân.\n+ Lần 2: Cho ra khỏi ngành và bị blacklist các ngành nhà trực thuộc Nhà Xanh."
        },
        {
          so: "2.4",
          t : "Cảnh sát Hình sự không được tự ý đi làm nhiệm vụ mà chưa có Chỉ đạo…",
          n : ["- Cảnh sát Hình sự không được tự ý đi làm nhiệm vụ mà chưa có Chỉ đạo từ cấp trên."],
          phat: "+ Vi phạm\n+ Lần 1: Đình chỉ công tác 3 ngày và bồi thường tiền cho người dân.\n+ Lần 2: Cho ra khỏi ngành và bị blacklist các ngành nhà trực thuộc Nhà Xanh."
        },
        {
          so: "2.5",
          t : "Cảnh sát Hình sự tuyệt đối không được xử lý dụng cụ hỗ trợ khác của…",
          n : ["- Cảnh sát Hình sự tuyệt đối không được xử lý dụng cụ hỗ trợ khác của ngành Cảnh sát ngoại trừ Còng và súng điện."],
          phat: "+ Vi phạm\n+ Lần 1: Đình chỉ công tác 3 ngày và bồi thường tiền cho người dân.\n+ Lần 2: Cho ra khỏi ngành và bị blacklist các ngành nhà trực thuộc Nhà Xanh."
        }
      ]
    },

    /* ---------- Chương 3 ---------- */
    {
      id  : "c3-quy-dinh-ve-nguoi-dan",
      ten : "QUY ĐỊNH VỀ NGƯỜI DÂN",
      dieu: [
        {
          so: "3.1",
          t : "Không được phép sử dụng xe máy để đi cướp.",
          n : ["- Không được phép sử dụng xe máy để đi cướp."],
          phat: "+ Phạt: 500$ + Bị ép xe hỏng xe hoặc gây ngất tự chịu."
        },
        {
          so: "3.2",
          t : "Người hỗ trợ vụ cướp không được dùng xe khác vốn dĩ không có, không…",
          n : ["- Người hỗ trợ vụ cướp không được dùng xe khác vốn dĩ không có, không liên quan trong vụ cướp tông vào xe cảnh sát dưới mọi hình thức."],
          phat: "+ Vi phạm phạt: 100.000$ + Cảnh cáo từ sever; Nếu vi phạm 3 lần cảnh cáo = band"
        },
        {
          so: "3.3",
          t : "Người hỗ trợ vụ cướp chỉ được quyền tạo chướng ngại vật cản trở…",
          n : ["- Người hỗ trợ vụ cướp chỉ được quyền tạo chướng ngại vật cản trở công an hoặc setup đón người tham gia cướp."],
          phat: "+ Vi phạm phạt: 2.000 – 4.000$ tùy theo trường hợp."
        },
        {
          so: "3.4",
          t : "Tuyệt đối không sử dụng phương tiện bay để thực hiện các vụ cướp…",
          n : ["- Tuyệt đối không sử dụng phương tiện bay để thực hiện các vụ cướp hoặc làm nghề bẩn, hỗ trợ cướp."],
          phat: "+ Vi phạm phạt: Band 3 ngày; sau khi quay lại tiếp tục tái phạm = band v.v"
        },
        {
          so: "3.5",
          t : "Xuống xe chạy bộ, tiếp tục tẩu thoát",
          n : ["- Xuống xe chạy bộ, tiếp tục tẩu thoát"],
          phat: "+ Phạt thêm: 200$/1 trường hợp"
        },
        {
          so: "3.6",
          t : "Công dân không được thực hiện hành vi vi phạm pháp luật ngoài Thành…",
          n : ["- Công dân không được thực hiện hành vi vi phạm pháp luật ngoài Thành phố như: Cậy biển báo, Cướp nhà dân, bảo kê tống tiền khu vực làm nghề sạch."],
          phat: "+ Vi phạm sử phạt: Áp chế trực tiếp và phạt hóa đơn từ 10.000$ – 20.000$."
        },
        {
          so: "3.7",
          t : "Sau khi đã có thông báo động đất của Thành phố mọi người dân không…",
          n : ["- Sau khi đã có thông báo động đất của Thành phố mọi người dân không được cướp"],
          phat: "+ Vi phạm = Band 3 ngày.\n+ Lần 2 = Band - Vĩnh viễn."
        },
        {
          so: "3.8",
          t : "Nghiêm cấm những tình huống cố ý lao xe xuống biển.( dừng xe ở trên…",
          n : ["- Nghiêm cấm những tình huống cố ý lao xe xuống biển.( dừng xe ở trên bờ và nhảy xuống biển sẽ không sao )"],
          phat: "+ x3 số bãi và số tiền nếu bị bắt"
        },
        {
          so: "3.9",
          t : "Mặt nạ trong vùng vàng và xanh- Kể cả khẩu trang và các trang bị…",
          n : ["- Mặt nạ trong vùng vàng và xanh- Kể cả khẩu trang và các trang bị che mặt [ 5000 / Người ]"],
          phat: "Phạt 10000 / Người"
        }
      ]
    },

    /* ---------- Chương 4 ---------- */
    {
      id  : "c4-quy-dinh-giao-thong",
      ten : "QUY ĐỊNH GIAO THÔNG",
      dieu: [
        {
          so: "4.1",
          t : "Không có giấy phép lái xe khi đang điều khiển phương tiện giao…",
          n : ["+ Không có giấy phép lái xe khi đang điều khiển phương tiện giao thông hoặc không có căn cước công dân khi bị kiểm tra hành chính, khi bị bắt trong các tình huống ingame"],
          phat: "Phạt: 5000$"
        },
        {
          so: "4.2",
          t : "Đỗ xe sai quy định, đỗ xe gây ảnh hưởng giao thông, đỗ xe ở nơi…",
          n : ["+ Đỗ xe sai quy định, đỗ xe gây ảnh hưởng giao thông, đỗ xe ở nơi không được phép đỗ"],
          phat: "Phạt: 5000$ + Giam xe"
        },
        {
          so: "4.3",
          t : "Đi xe không chính chủ (xe NPC, xe mang tên người dân khác) - áp…",
          n : ["+ Đi xe không chính chủ (xe NPC, xe mang tên người dân khác) - áp dụng sử phạt cộng dồn trong trường hợp sử dụng xe không chính chủ tham gia cướp."],
          phat: "Phạt: 5000$"
        },
        {
          so: "4.4",
          t : "Không chấp hành hiệu lệnh khi có hiệu lệnh yêu câu dừng xe từ cảnh…",
          n : ["+ Không chấp hành hiệu lệnh khi có hiệu lệnh yêu câu dừng xe từ cảnh sát"],
          phat: "Phạt: 3000$"
        },
        {
          so: "4.5",
          t : "Công an được phép lập chốt kiểm soát tốc độ khi có chuyên đề (GĐ…",
          n : [
            "+ Công an được phép lập chốt kiểm soát tốc độ khi có chuyên đề (GĐ, QLCS phải đăng thông báo lên TW ingame)",
            "Lưu ý: áp dụng sử phạt cả Công An, Bác Sĩ khi đang không thực hiện nhiệm vụ (nếu đang thực hiện nhiệm vụ phải mở đèn ưu tiên - Còi 1, 2, 3)"
          ],
          phat: "Tốc độ bị sử phạt quá tốc độ trong thành phố:\n* Xe máy: 80km/h\n* Ô tô 4 cửa: 100km/h\n* Ô tô 2 cửa: 120km/h\nPhạt: 500$ - 1.000$/lần\nTốc độ bị sử phạt quá tốc độ ngoài thành phố:\n* Xe máy: 100km/h\n* Ô tô 4 cửa: 130km/h\n* Ô tổ 2 cửa: 150km/h\nPhạt: 500$ - 1.000$/lần"
        }
      ]
    },

    /* ---------- Chương 5 ---------- */
    {
      id  : "c5-quy-dinh-cuop-tap-hoa-cuop-ket-ngoai-cuop-ke",
      ten : "QUY ĐỊNH CƯỚP TẠP HÓA (⭐⭐cướp két ngoài) (⭐⭐⭐⭐ Cướp két trong)",
      dieu: [
        {
          so: "5.1",
          t : "Điều kiện cần và đủ để mở cướp tạp hóa phải có tối thiểu 5 cảnh…",
          n : [
            "- Điều kiện cần và đủ để mở cướp tạp hóa phải có tối thiểu 5 cảnh sát; tối đa 5 xe Công an tham gia truy đuổi; Khi công an tới người cướp chưa thực hiện xong thao tác, công an sẽ chờ 10s - 1 phút để người cướp hoàn thành vụ cướp và lên xe tháo chạy. (Thời gian được tính từ lúc có hiệu lệnh còi trong vùng nghe thấy của người cướp).",
            "- Trường hợp cướp sự dụng từ 2 phương tiện trở lên công an được sự dụng 01 máy bay để theo dấu"
          ],
          phat: "Hình thức phạt: Phạt 10000$ người + tịch thu toàn bộ đồ bẩn\nSử phạt: 30 bãi\nVi phạm luật = hủy tình huống\ncố tình vi phạm luật = BAN"
        },
        {
          so: "5.2",
          t : "Đối với người đi cướp Tạp hóa: Tối thiểu team 4 người + được dùng…",
          n : [
            "- Đối với người đi cướp Tạp hóa: Tối thiểu team 4 người + được dùng 01 phương tiện 4 chỗ; Tối đa team 8 người + 02 phương tiện 4 chỗ và yêu cầu có ít nhất 1 con tin.",
            "- Khống chế con tin: Team 4 người ít nhất có 01 người khống chế con tin - Team 8 người có ít nhất 02 người khống chế con tin (Được dùng súng săn để khống chế)"
          ]
        },
        {
          so: "5.3",
          t : "Phương tiện được phép tham gia:+ police: 2/5",
          n : [
            "- Phương tiện được phép tham gia:+ police: 2/5",
            "+ sjcop1 (báo 2): 3/5 (có dòng xe 3 = 2/5 xe)+ GT63: Tối đa 1/5 (phía cướp có sử dụng xe tốc độ >= 230km/h trở lên = 2/5 xe GT63 tham gia và -1 sjcop1 = 1/5 sjcop1)"
          ]
        }
      ]
    },

    /* ---------- Chương 6 ---------- */
    {
      id  : "c6-quy-dinh-cuop-nha",
      ten : "QUY ĐỊNH CƯỚP NHÀ (⭐⭐⭐)",
      dieu: [
        {
          so: "6.1",
          t : "Điều kiện cần và đủ để mở cướp đồng hồ phải có tối thiểu 5 cảnh…",
          n : [
            "- Điều kiện cần và đủ để mở cướp đồng hồ phải có tối thiểu 5 cảnh sát; tối đa 5 xe Công an; Khi công an tới người cướp chưa thực hiện xong thao tác, công an sẽ chờ 2 – 3p để người cướp hoàn thành vụ cướp và lên xe tháo chạy. (Thời gian được tính từ lúc có hiệu lệnh còi trong vùng nghe thấy của người cướp)",
            "Trường hợp cướp sự dụng từ 2 phương tiện trở lên công an được sự dụng 01 máy bay để theo dấu"
          ],
          phat: "Hình thức phạt: Phạt 7000$/ người + Lao động công ích 20 bãi + tịch thu toàn bộ đồ bẩn.\nVi phạm luật = hủy tình huống\ncố tình vi phạm luật = BAN"
        },
        {
          so: "6.2",
          t : "Đối với cướp nhà dân: Tối thiểu team 4 người + được dùng 01 phương…",
          n : ["- Đối với cướp nhà dân: Tối thiểu team 4 người + được dùng 01 phương tiện 4 chỗ; Tối đa team 8 người + 02 phương tiện 4 chỗ."]
        },
        {
          so: "6.3",
          t : "Phương tiện được phép tham gia:+ police: 2/5",
          n : [
            "- Phương tiện được phép tham gia:+ police: 2/5",
            "+ sjcop1 (báo 2): 3/5 (có dòng xe 3 = 2/5 xe)+ GT63: Tối đa 1/5 (phía cướp có sử dụng xe tốc độ >= 230km/h trở lên = 2/5 xe GT63 tham gia và -1 sjcop1 = 1/5 sjcop1)"
          ]
        }
      ]
    },

    /* ---------- Chương 7 ---------- */
    {
      id  : "c7-quy-dinh-giao-oxy",
      ten : "QUY ĐỊNH GIAO OXY (⭐)",
      dieu: [
        {
          so: "7.1",
          t : "Điều kiện cần và đủ để mở giao Oxy phải có tối thiểu 2 cảnh sát…",
          n : ["- Điều kiện cần và đủ để mở giao Oxy phải có tối thiểu 2 cảnh sát; tối đa 2 xe Công an tham gia truy đuổi khi phát hiện tình nghi."],
          phat: "Hình thức phạt: 1 Bình oxi = 500 + tịch thu toàn bộ đồ bẩn + phạt lao động công ích 10 bãi đối với 10 bình và + 5k / người"
        },
        {
          so: "7.2",
          t : "Sau 7 phút mà người giao oxy không cắt dấu được, cảnh sát được dùng…",
          n : ["- Sau 7 phút mà người giao oxy không cắt dấu được, cảnh sát được dùng biện pháp mạnh (Ép xe bằng biện pháp mạnh)"]
        },
        {
          so: "7.3",
          t : "Phương tiện được phép tham gia:+ Police: 2/2 (có dòng xe 2 or 3 =…",
          n : [
            "- Phương tiện được phép tham gia:+ Police: 2/2 (có dòng xe 2 or 3 = 1/2",
            "+ Sjcop1 (báo 2): 1/2 (có dòng xe 3 = 0/2 xe)+ GT63: 1/2 (có xe 3 thì - hết xe 2 - và chỉ áp dụng khi đối tượng có sử dụng xe tốc độ >= 230km/h)"
          ]
        }
      ]
    },

    /* ---------- Chương 8 ---------- */
    {
      id  : "c8-quy-dinh-tang-chu-chat-cam-do-cam",
      ten : "QUY ĐỊNH TÀNG CHỮ CHẤT CẤM, ĐỒ CẤM (⭐)",
      dieu: [
        {
          so: "8.1",
          t : "đồ bẩn bao gồm: Các loại cần sa đóng gói, kẹo Ảo Giác, Caraplis…",
          n : [
            "- đồ bẩn bao gồm: Các loại cần sa đóng gói, kẹo Ảo Giác, Caraplis, bình oxy, tiền bẩn, đồng hồ rolex , dây chuyền vàng, nhẫn kim cương, hóa đơn bẩn, điện thoại bẩn, giấy in tiền, ma túy đá, cocain, toolkit, chìa khóa A, B, C (và các nguyên liệu liên quan); các loại thẻ xanh, đỏ, tím, vàng, đen, biển báo ăn cướp, tivi, tủ lạnh, máy tính, lò vi sóng, tranh bị đánh cắp, điện thoại samsung, lockpick đỏ… các vật phẩm liên quan tới các nghề bẩn, cướp, cướp đều tính là đồ cấm.",
            "Lưu ý: Cọ nụ, cỏ sấy không tính là đồ bẩn"
          ],
          phat: "Tàng chữ từ 01 - 50 item: Tịch thu đồ bẩn , phạt tiền từ 500 – 2.000 tùy theo số lượng + phạt lao động công ích 5 bãi.\nTàng chữ từ 50 - 100 item: Tịch thu đồ bẩn, phạt 2.000 - 5.000$ tùy theo số lượng + phạt lao động công ích 15 bãi.\nTàng chữ trên 100 item: tịch thu đồ bẩn, phạt 10.000$- 30.000$ tùy theo số lượng + phạt lao động công ích 20 bãi."
        },
        {
          so: "8.2",
          t : "Tàng chữ Lockpick: Mỗi công dân chỉ được mang theo mình không quá…",
          n : ["- Tàng chữ Lockpick: Mỗi công dân chỉ được mang theo mình không quá 05 lockpick. Mang trên số lượng 5 sẽ tính là tàng chữ đồ cấm"],
          phat: "+ Tàng chữ từ 5 - 20 lockpick: Phạt 500 - 1.000$ tùy số lượng đem theo + tịch thu để dư 5 cái.\nTàng chữ 50 - 100 lockpick: 1.000$ - 3.000$ tùy số lượng đem theo + tịch thu để dư 5 cái.\nTàng chữ trên 100 lockpick: 5.000$ - 10.000$ tùy số lượng mang theo + tịch thu để dư 5 cái."
        },
        {
          so: "8.3",
          t : "Tàng chữ vũ khí, công cụ hỗ trợ của ban nghành (đèn pin, súng điện…",
          n : ["- Tàng chữ vũ khí, công cụ hỗ trợ của ban nghành (đèn pin, súng điện, còng tay)."],
          phat: "+ Đối với vũ khí và công cụ hỗ trợ của ban nghành, Phạt người tuồn đồ nghành 1.000$ + band khỏi nghành; Phạt người sở hữu đồ 10.000$ + thu hồi."
        }
      ]
    },

    /* ---------- Chương 9 ---------- */
    {
      id  : "c9-quy-dinh-trom-cho",
      ten : "QUY ĐỊNH TRỘM CHÓ (⭐)",
      dieu: [
        {
          so: "9.1",
          t : "Đối với người dân: Đi tối đa 02 người 01 xe máy (xe 2 bánh) - Bắt…",
          n : ["- Đối với người dân: Đi tối đa 02 người 01 xe máy (xe 2 bánh) - Bắt buộc sử dụng phương tiện 2 bánh (ưu tien xe máy Bati)"],
          phat: "+ Phạt khi bị CA bắt: người bắt chó (là người đang bế chó) phạt 2000$ - Đồng phạm phạt 1.000$\nVi phạm luật = hủy tình huống\nCố tình vi phạm luật = BAN"
        },
        {
          so: "9.2",
          t : "Đối với công An: Có trách nhiệm tuần khu cướp chó & bán chó và chỉ…",
          n : [
            "- Đối với công An: Có trách nhiệm tuần khu cướp chó & bán chó và chỉ được dùng phương tiện là xe máy (xe máy nghành) để tham gia tuần và truy bắt kẻ cướp chó.",
            "Số lượng cảnh sát truy đuổi tối đa/1 đối tượng cướp tình nghi = 2",
            "1 xe cướp chó = tối đa 2 xe công an truy đuổi",
            "Sau 5 phút Nếu vẫn dữ được dấu vết kẻ cướp CA được quyền sử dụng Súng điện DP Lốp xe",
            "Công an không được Cam khu vực bán chó",
            "Khi đi tuần phải mở đèn + còi 1 - Khi truy bắt phải mở đèn + còi 2 - Trước Khi DB lốp phải mở còi 3"
          ],
          phat: "+ Công an sai luật = đóng phạt thay người cướp"
        }
      ]
    },

    /* ---------- Chương 10 ---------- */
    {
      id  : "c10-quy-dinh-hai-can-sa",
      ten : "QUY ĐỊNH HÁI CẦN SA (⭐)",
      dieu: [
        {
          so: "10.1",
          t : "Người dân được quyền hái cần sa (dạng Cỏ Nụ), Công an không bắt…",
          n : ["- Người dân được quyền hái cần sa (dạng Cỏ Nụ), Công an không bắt hoặc sử phạt với vật phẩm cỏ nụ."]
        },
        {
          so: "10.2",
          t : "Công an được quyền kiểm tra và sử phạt:",
          n : [
            "- Công an được quyền kiểm tra và sử phạt:",
            "+ Người dân đang ở khu chế biến cần (xấy, đóng gói)",
            "+ Người dân có tang chữ cỏ đã sấy và các loại gói cần sa trong người.",
            "+ Người dân đang có hành vi bán cần cho công dân, NPC trong thành phố.",
            "+ Công an được quyền kiểm tra những người dân quanh khu vực có báo động bán cần"
          ],
          phat: "+ Người dân vi phạm sẽ sử theo tội tàng chữ, buôn bán chất cấm + phạt lao động công ích 10 bãi\n+ Vi phạm luật = hủy tình huống\nCố tình vi phạm luật = BAN"
        }
      ]
    },

    /* ---------- Chương 11 ---------- */
    {
      id  : "c11-quy-dinh-trom-bien-bao",
      ten : "QUY ĐỊNH TRỘM BIỂN BÁO (⭐)",
      dieu: [
        {
          so: "11.1",
          t : "Cướp biển báo yêu cầu tối thiểu 03 cảnh sát online + tối thiểu: 02…",
          n : [
            "- Cướp biển báo yêu cầu tối thiểu 03 cảnh sát online + tối thiểu: 02 người/1 biển tối đa 04 người/1 biển",
            "- Trong một tính huống cướp không được có quá 2 người cùng cướp tại một vị trí biển báo",
            "- Trong một vụ cướp biển báo, người tham gia cướp không được dùng quá 01 phương tiện giao thông."
          ],
          phat: "+ Đối với trường hợp bị bắt Phạt 2000$/người + phạt lao động công ích 10 bãi + tịch thu toàn bộ đồ bẩn.\n+ Vi phạm luật = hủy tình huống\nCố tình vi phạm luật = BAN"
        },
        {
          so: "11.2",
          t : "Công an được quyền sử dụng tối đa 03 xe để truy đuổi",
          n : [
            "Công an được quyền sử dụng tối đa 03 xe để truy đuổi",
            "Tham ra truy đuổi tối đa 05 cảnh sát"
          ]
        },
        {
          so: "11.3",
          t : "Phương tiện được phép tham gia:+ Police: 2/2 (có dòng xe 2 or 3 =…",
          n : [
            "- Phương tiện được phép tham gia:+ Police: 2/2 (có dòng xe 2 or 3 = 1/2",
            "+ Sjcop1 (báo 2): 1/2 (có dòng xe 3 = 0/2 xe)+ GT63: 1/2 (có xe 3 thì - hết xe 2 - và chỉ áp dụng khi đối tượng có sử dụng xe tốc độ xe tốc độ >= 230km/h)"
          ]
        }
      ]
    },

    /* ---------- Chương 12 ---------- */
    {
      id  : "c12-quy-dinh-cuop-atm",
      ten : "QUY ĐỊNH CƯỚP ATM (⭐⭐⭐⭐)",
      dieu: [
        {
          so: "12.1",
          t : "Điều kiện cần và đủ để mở cướp đồng hồ phải có tối thiểu 7 cảnh…",
          n : [
            "- Điều kiện cần và đủ để mở cướp đồng hồ phải có tối thiểu 7 cảnh sát; tối đa 6 xe Công an tham gia truy đuổi. Khi công an tới người cướp chưa thực hiện xong thao tác, công an sẽ chờ 10S – 1P để người cướp hoàn thành vụ cướp và lên xe tháo chạy. (Thời gian được tính từ lúc có hiệu lệnh còi trong vùng nghe thấy của người cướp)",
            "Trường hợp cướp sự dụng từ 2 phương tiện trở lên công an được sự dụng 01 máy bay để theo dấu"
          ],
          phat: "+ Hình thức phạt: Phạt 10000/người + phạt lao động công ích 30 bãi + tịch thu toàn bộ đồ bẩn.\n+ Vi phạm luật = hủy tình huống\n+ Cố tình vi phạm luật = BAN"
        },
        {
          so: "12.2",
          t : "Đối với cướp ATM: Tối thiểu team 4 người + được dùng 01 phương tiện…",
          n : ["- Đối với cướp ATM: Tối thiểu team 4 người + được dùng 01 phương tiện 4 chỗ + 1 con tin; Tối đa team 10 người + tối đa 03 phương tiện 4 chỗ + Tối thiểu 1 con tin."]
        },
        {
          so: "12.3",
          t : "Phương tiện được phép tham gia:+ police: 1/6",
          n : [
            "- Phương tiện được phép tham gia:+ police: 1/6",
            "+ sjcop1 (báo 2): 3/6",
            "+ GT63: 2/6",
            "+ trường hợp cướp sử dụng xe > 2 xe tốc độ > 230km = tối đa 3/6 GT63 và 3/6 sjcop1"
          ]
        }
      ]
    },

    /* ---------- Chương 13 ---------- */
    {
      id  : "c13-quy-dinh-ra-xe",
      ten : "QUY ĐỊNH RÃ XE (⭐)",
      dieu: [
        {
          so: "13.1",
          t : "Quy định người tham gia tối đa 3 người rã và 1 người ngồi trên xe…",
          n : ["- Quy định người tham gia tối đa 3 người rã và 1 người ngồi trên xe setup hỗ trợ người rã."],
          phat: "+ Hình thức phạt: 500$ + Tịch thu toàn bộ nguyên vật liệu: (Đồng, Kính, Nhôm, Thép, Cao su, Nhựa) + phạt lao động công ích 5 bãi."
        },
        {
          so: "13.2",
          t : "Đối với rã xe: Tối đa team 4 người + 1 phương tiện hỗ trợ. Có từ 3…",
          n : ["- Đối với rã xe: Tối đa team 4 người + 1 phương tiện hỗ trợ. Có từ 3 Cảnh sát trở lên."],
          phat: "+ Vi phạm luật = hủy tình huống.\nCố tình vi phạm luật = BAN."
        }
      ]
    },

    /* ---------- Chương 14 ---------- */
    {
      id  : "c14-au-da-trong-vung-vang",
      ten : "ẨU ĐẢ TRONG VÙNG VÀNG (⭐⭐⭐)",
      dieu: [
        {
          so: "14.1",
          t : "Ẩu đả có tổ chức (có trên 03 người tham gia)",
          n : ["Ẩu đả có tổ chức (có trên 03 người tham gia)"],
          phat: "+ phạt 20.000/1 người không bị ngất; 10000/1 người bị ngất + phạt tất cả lao động công ích 40 bãi"
        },
        {
          so: "14.2",
          t : "Ẩu đả không tổ chức (dưới 02 người tham gia)",
          n : ["Ẩu đả không tổ chức (dưới 02 người tham gia)"],
          phat: "+ phạt 10.000 người không bị ngất; phạt 5.000 người bị ngất. + phạt tất cả lao động công ích 20 bãi"
        },
        {
          so: "14.3",
          t : "Ẩu đả để gây sự gây rối có tình đánh người vô cớ theo hình thức phá…",
          n : ["Ẩu đả để gây sự gây rối có tình đánh người vô cớ theo hình thức phá hoại không lí do:"],
          phat: "+ Nonroplay (Ban 3 ngày - vĩnh viễn)"
        },
        {
          so: "14.4",
          t : "Ẩu đả có sử dụng vũ khí hỗ trợ (được phép cộng phạt với điều 1 và…",
          n : ["Ẩu đả có sử dụng vũ khí hỗ trợ (được phép cộng phạt với điều 1 và 2):"],
          phat: "+ Phạt đánh sẹo vũ khí với trường hợp có giấy phép sử dụng vũ khí và tịch thu vũ khí với trường hợp không có giấy phép sử dụng vũ khí + phạt 10.000$/1 cá nhân có vũ khí trong người. + phạt tất cả lao động công ích 15 bãi"
        }
      ]
    },

    /* ---------- Chương 15 ---------- */
    {
      id  : "c15-au-da-trong-vung-do",
      ten : "ẨU ĐẢ TRONG VÙNG ĐỎ (⭐⭐)",
      dieu: [
        {
          so: "15.1",
          t : "Ẩu đả có tổ chức:",
          n : ["Ẩu đả có tổ chức:"],
          phat: "+ Bị bắt phạt 5000 người không bị ngất; phạt 3000 người bị ngất."
        },
        {
          so: "15.2",
          t : "Ẩu đả không tổ chức (dưới 02 người tham gia):",
          n : ["Ẩu đả không tổ chức (dưới 02 người tham gia):"],
          phat: "+ phạt 1.000 người không bị ngất; phạt 500 người bị ngất."
        },
        {
          so: "15.3",
          t : "Ẩu đả để gây sự gây rối có tình đánh người vô cớ theo hình thức phá…",
          n : ["Ẩu đả để gây sự gây rối có tình đánh người vô cớ theo hình thức phá hoại không lí do:"],
          phat: "+ Ban 3 ngày - vĩnh viễn"
        },
        {
          so: "15.4",
          t : "Ẩu đả có sử dụng vũ khí hỗ trợ (được phép cộng phạt với điều 1 và…",
          n : ["Ẩu đả có sử dụng vũ khí hỗ trợ (được phép cộng phạt với điều 1 và 2):"],
          phat: "+ Phạt 5.000$/1 cá nhân có vũ khí trong người."
        }
      ]
    },

    /* ---------- Chương 16 ---------- */
    {
      id  : "c16-quy-dinh-bat-coc",
      ten : "QUY ĐỊNH BẮT CÓC (⭐⭐)",
      dieu: [
        {
          so: "16.1",
          t : "Khi bắt cóc người chơi đội bắt cóc phải có ít nhất 3 người trở lên…",
          n : [
            "- Khi bắt cóc người chơi đội bắt cóc phải có ít nhất 3 người trở lên và người bị bắt cóc phải là người đang hoạt động những nới vắng vẻ dưới 3 người khác băng,nhóm xung quanh và người tổ chức bắt cóc bắt buộc phải có hung khí khống chế con tin.",
            "- Có thể dàn dựng tính huống bắt cóc hoặc giả mạo con tin để tham gia các hoạt động trong sever.",
            "- Người chơi không được phép sử dụng emote + tương tác (trick) công dân trong F1 để bắt cóc người khác khi mục tiêu bắt cóc chưa bị trói (buộc tay bằng giây rút)",
            "- Người bị bắt bóc bắt buộc phải là người đang bị buộc tay bằng giây rút.",
            "- Người bị bắt cóc phải luôn ở trong trạng thái còn sống - không bị ngất, chết.",
            "- Tuyệt đối nghiêm cấm các hành vi bắt cóc trong vùng xanh của thành phố.- Trong tình huống người bị bắt cóc sau khi bị trói tay mà có cơ hội để chạy trốn có thể chạy trốn. Người thực hiện hành vi bắt cóc có thể truy đuổi và sử dụng Hộ tống để bắt lại. Sau 5 phút không bắt được lại con tin coi như tình huống thất bại - Người bị bắt cóc coi như tự tẩu thoát thành công (Trong tình huống ngày nghiêm cấm con tin dùng trick để tẩu thoát hoặc alt để ngáng chân).- Nghiêm cấm các tình huống liên hoàn: Bắt cóc lần hai cùng một người, một đối tượng trong vòng 24h",
            "- Nếu xác định bắt cóc để giết người (trùng sinh) thì sau khi người bị bắt cóc đã chết - thì người thực hiện bắt cóc giết người phải kết thúc mọi câu chuyện, xích mích với người bị giết và không được tiếp tục thực hiện hành vi bắt cóc, trung sinh nhân vật của người đã từng bị bạn trùng sinh trong vòng vòng 7 ngày."
          ],
          phat: "+ Vi phạm phạt: 100.000$/1 lần vi phạm + cảnh cáo từ thị trưởng; 3 lần cảnh cáo phạt Band 3 hoặc band vĩnh viễn tùy mức độ."
        }
      ]
    },

    /* ---------- Chương 17 ---------- */
    {
      id  : "c17-quy-dinh-su-dung-vu-khi",
      ten : "QUY ĐỊNH SỬ DỤNG VŨ KHÍ",
      dieu: [
        {
          so: "17.1",
          t : "Đối với ban nghành nhà nước (Công an, bác sĩ): Không được tự tiện…",
          n : ["- Đối với ban nghành nhà nước (Công an, bác sĩ): Không được tự tiện rút vũ khí, sử dụng vũ khí trong thành phố, vùng xanh, vùng làm việc khi không thực sự cần thiết."],
          phat: "+ Vi phạm 3 lần cảnh cáo phạt Band 3 ngày + band khỏi nghành"
        },
        {
          so: "17.2",
          t : "Đối với công dân: Không được tự tiện cầm vũ khí, sử dụng vũ khí…",
          n : ["- Đối với công dân: Không được tự tiện cầm vũ khí, sử dụng vũ khí trong khu vực vùng xanh (Bệnh viện, đồn công an, gara trung tâm, các khu kinh doanh, khu tập trung đông người, các khu làm việc) chỉ sử dụng vũ khí trong khu vực của Xã đoàn quản lý và chịu sự quản lý của người lãnh đạo Xã đoàn. Ngoài ra chỉ sử dụng trong trường hợp bắt cóc con tin tham ra vụ cướp."],
          phat: "+ Vi phạm phạt: 10.000$/1 lần vi phạm đối với tội sử dụng vũ khí trái phép theo điều 2 quy định\nTái phạm lần 2: phạt 20.000$/1 lần + tịch thu vũ khí 7 ngày."
        },
        {
          so: "17.3",
          t : "Dùng vũ khí để hành hung vô tổ chức với phương hướng phá game gây…",
          n : ["- Dùng vũ khí để hành hung vô tổ chức với phương hướng phá game gây ảnh hưởng người khác"],
          phat: "+ Phạt: Thu hồi vũ khí + Ban 3 ngày - vĩnh viễn tùy mức độ"
        },
        {
          so: "17.4",
          t : "Người dân có vũ khí phải đăng ký giấy phép sử dụng vũ khí với công…",
          n : ["- Người dân có vũ khí phải đăng ký giấy phép sử dụng vũ khí với công an"],
          phat: "+ Không có giấy phép , không chính chủ = tịch thu vũ khí không hoàn trả"
        },
        {
          so: "17.5",
          t : "Dùng vũ khí để tấm công người khác trong các vụ ẩu đả trái phép gây…",
          n : ["- Dùng vũ khí để tấm công người khác trong các vụ ẩu đả trái phép gây mất trật tự an ninh thành phố"],
          phat: "+ Phạt: 5.000$/1 vũ khí tham gia ẩu đả, tấn công."
        },
        {
          so: "17.6",
          t : "Vũ khí sử dụng để áp chế con tim trong trường hợp: Cướp tạp hóa…",
          n : [
            "- Vũ khí sử dụng để áp chế con tim trong trường hợp: Cướp tạp hóa, cướp nhà dân, cướp xe tiền, Cướp ngân hàng",
            "- Tuyệt đối không được dùng để tấn công gây ngất con tin."
          ],
          phat: "+ Vi phạm phạt : Bồi thường cho con tin 5.000$ + nộp phạt 50.000$/1 trường hợp"
        }
      ]
    },

    /* ---------- Chương 18 ---------- */
    {
      id  : "c18-quy-dinh-buon-lau",
      ten : "QUY ĐỊNH BUÔN LẬU(⭐⭐)",
      dieu: [
        {
          so: "18.1",
          t : "Bán buôn là các hành vi bán chất cấm (cần xa, ma túy,) cho NPC…",
          n : ["- Bán buôn là các hành vi bán chất cấm (cần xa, ma túy,) cho NPC trong thành phố"],
          phat: "+Công an bắt được phạt theo luật tàng chữ chất cấm + phạt lao động công ích 10 bãi"
        },
        {
          so: "18.2",
          t : "Người chơi không được dùng trick để bán nhanh, hoặc logout sau khi…",
          n : ["- Người chơi không được dùng trick để bán nhanh, hoặc logout sau khi bán thành công."],
          phat: "+Vi phạm Ban 3 ngày - hoặc vĩnh viễn"
        },
        {
          so: "18.3",
          t : "Công an khi có tín báo từ người dân (bao gồm cả NPC) được quyền sử…",
          n : ["- Công an khi có tín báo từ người dân (bao gồm cả NPC) được quyền sử dụng moto hoặc ô tô để tuần khu vực có báo động bán buôn và kiểm tra hành trang những người trong khu vực có báo động, công an bắt buộc phải giai tín hiệu bằng cách chào, hỏi, xin phép trước khi kiểm tra hành trang công dân."]
        },
        {
          so: "18.4",
          t : "Công dân khi có yêu cầu kiểm tra từ phía công an do có thông báo…",
          n : ["- Công dân khi có yêu cầu kiểm tra từ phía công an do có thông báo bán buôn tại khu vực công dân đang đứng, công dân vui lòng hợp tác cho công an kiểm tra (nếu bạn là người trong sạch)"],
          phat: "+Trường hợp không hợp tác công an được quyền áp chế để kiểm tra, nếu có tàng chữ chất cấm sẽ phạt theo luật tàng chữ chất cấm.\n(vật phẩm được dùng để áp chế: súng điện, còng)"
        },
        {
          so: "18.5",
          t : "Công dân và Cảnh sát phải hoàn toàn sử dụng xe máy trong lúc buôn…",
          n : ["- Công dân và Cảnh sát phải hoàn toàn sử dụng xe máy trong lúc buôn bán và truy đuổi"],
          phat: "+ Vi phạm:\nLần 1: Hủy tình huống.\nLần 2: Cố tình Band 3 ngày và black list.\nLần 3: Band Vĩnh viễn."
        }
      ]
    },

    /* ---------- Chương 19 ---------- */
    {
      id  : "c19-cuop-apple-store",
      ten : "CƯỚP APPLE STORE (⭐⭐)",
      dieu: [
        {
          so: "19.1",
          t : "Điều kiện: Cần tối đa 4 người tham gia vụ cướp + 1 phương tiện 4…",
          n : ["- Điều kiện: Cần tối đa 4 người tham gia vụ cướp + 1 phương tiện 4 chỗ + 4 Công an trở lên.- Tối đa 03 phương tiện truy đuổi"],
          phat: "+ Xử phạt: Phạt 3000$ + phạt lao động công ích 20 bãi + Tịch thu toàn bộ đồ bẩn.\n+ Vi phạm luật = hủy tình huống.\n+ Cố tình vi phạm luật = Ban."
        },
        {
          so: "19.2",
          t : "Phương tiện được phép tham gia:+ police: 2/3",
          n : [
            "- Phương tiện được phép tham gia:+ police: 2/3",
            "+ sjcop1 (báo 2): 1/3 (có dòng xe 3 = 0/3 xe)+ GT63: Tối đa 1/3 (áp dụng khi phía cướp có sử dụng xe tốc độ >= 230km/h trở lên = 1/3 xe GT63 tham gia và -1 sjcop1 = 0/3 sjcop1)"
          ]
        }
      ]
    },

    /* ---------- Chương 20 ---------- */
    {
      id  : "c20-bao-ke-dia-ban",
      ten : "BẢO KÊ ĐỊA BÀN",
      dieu: [
        {
          so: "20.1",
          t : "Tất cả các khu vực làm nghề sạch (không bao gồm vườn cần sa, vườn…",
          n : ["- Tất cả các khu vực làm nghề sạch (không bao gồm vườn cần sa, vườn cokein), khu trong thành phố (ngoại trừ địa bàn của các gia tộc) không được thu phép bảo kê hoặc gây rối trật tự khu vực này."],
          phat: "+ Vi phạm lần 1: Phạt bồi thường gấp 3 lần số tiền đã bao kê.\n+ Vi phạm lần 2: Phạt bồi thường gấp 5 lần số tiền đã bao kê.\n+ Vi phạm lần 3: Band vĩnh viễn.\n+ Trường hợp Công an phát hiện và đi đến nơi có quyền còng đối tượng tại chỗ."
        }
      ]
    },

    /* ---------- Chương 21 ---------- */
    {
      id  : "c21-cuop-tru-dien",
      ten : "CƯỚP TRỤ ĐIỆN (⭐)",
      dieu: [
        {
          so: "21.1",
          t : "Điều kiện cướp: có 02 người trở lên và tối đa không quá 06 người +…",
          n : ["- Điều kiện cướp: có 02 người trở lên và tối đa không quá 06 người + 01 phương tiện 4 bánh + tối thiểu 04 công an online. Khi công an tới người cướp chưa thực hiện xong thao tác, công an sẽ chờ 10S – 1P để người cướp hoàn thành vụ cướp và lên xe tháo chạy. (Thời gian được tính từ lúc có hiệu lệnh còi trong vùng nghe thấy của người cướp)"],
          phat: "+ Hình thức phạt: Phạt 300$ - 500$/người + phạt lao động công ích 15 bãi + tịch thu toàn bộ đồ bẩn.\n+ Vi phạm luật = hủy tình huống\n+ Cố tình vi phạm luật = BAN"
        },
        {
          so: "21.2",
          t : "Phương tiện được phép tham gia:+ Police: 2/2 (có dòng xe 2 or 3 =…",
          n : [
            "- Phương tiện được phép tham gia:+ Police: 2/2 (có dòng xe 2 or 3 = 1/2",
            "+ Sjcop1 (báo 2): 1/2 (có dòng xe 3 = 0/2 xe)+ GT63: 1/2 (có xe 3 thì - hết xe 2 - và chỉ áp dụng khi đối tượng có sử dụng xe tốc độ xe tốc độ >= 230km/h)"
          ]
        }
      ]
    },

    /* ---------- Chương 22 ---------- */
    {
      id  : "c22-cuop-xe-tien",
      ten : "CƯỚP XE TIỀN (⭐⭐⭐⭐)",
      dieu: [
        {
          so: "22.1",
          t : "Điều kiện cướp: có 04 người trở lên và tối đa không quá 10 người +…",
          n : ["Điều kiện cướp: có 04 người trở lên và tối đa không quá 10 người + tối thiểu 01 xe 4 bánh tối đa không quá 04 xe 4 bánh + tối thiểu 07 công an online"],
          phat: "+ Hình thức phạt: Phạt 5000$ - 10000$/người + phạt lao động công ích 40 bãi + tịch thu toàn bộ đồ bẩn.\n+ Vi phạm luật = hủy tình huống\n+ Cố tình vi phạm luật = BAN"
        },
        {
          so: "22.2",
          t : "Phương tiện được phép tham gia:+ police: 1/6",
          n : [
            "- Phương tiện được phép tham gia:+ police: 1/6",
            "+ sjcop1 (báo 2): 3/6",
            "+ GT63: 2/6",
            "+ trường hợp cướp sử dụng xe > 2 xe tốc độ > 230km = tối đa 3/6 GT63 và 3/6 sjcop1"
          ]
        }
      ]
    },

    /* ---------- Chương 23 ---------- */
    {
      id  : "c23-luat-san-thu-quy-hiem",
      ten : "LUẬT SĂN THÚ QUÝ HIẾM (⭐⭐)",
      dieu: [
        {
          so: "23.1",
          t : "Khi đi săn thú công dân có cơ hội nhìn thấy Người tuyết, nếu bạn…",
          n : ["Khi đi săn thú công dân có cơ hội nhìn thấy Người tuyết, nếu bạn giết người tuyết công an sẽ nhận được thông báo và tiến hành tuần tra khu vực săn và kiểm tra sử phạt kẻ săn người tuyết"],
          phat: "Phạt 1250$/1 người tuyết + thịch thu xác người tuyết + phạt lao động công ích 10 bãi."
        }
      ]
    },

    /* ---------- Chương 24 ---------- */
    {
      id  : "c24-luat-cua-bom",
      ten : "LUẬT CƯA BOM (⭐⭐)",
      dieu: [
        {
          so: "24.1",
          t : "Điều kiện cần và đủ khi cưa BOM là 2 cảnh sát online và bạn phải có…",
          n : ["Điều kiện cần và đủ khi cưa BOM là 2 cảnh sát online và bạn phải có 2 người tham gia"],
          phat: "- Cưa bom thành công nhận vật phẩm: phạt 1000$ + phạt lao động 10 bãi- Cưa bom thất bại (ngất): phạt lao động 10 bãi"
        },
        {
          so: "24.2",
          t : "Nghiêm cấm hành vi cưa bom trước cửa bệnh viện, cửa đồn công an…",
          n : ["Nghiêm cấm hành vi cưa bom trước cửa bệnh viện, cửa đồn công an, các khu vực tập trung đông người, các khu vực của các doanh nghiệp trong thành phố"],
          phat: "Vi phạm = band 1 - 3 ngày, tái diễn nhiều lần = band vĩnh viễn"
        }
      ]
    },

    /* ---------- Chương 25 ---------- */
    {
      id  : "c25-luat-cooldown",
      ten : "LUẬT COOLDOWN (⭐)",
      dieu: [
        {
          so: "25.1",
          t : "Nếu cố ý cướp trong thời gian cool down : - Đối với biển báo x2…",
          n : ["Nếu cố ý cướp trong thời gian cool down : - Đối với biển báo x2 hình phạt và + 20p tù liên bang - Đối với oxy x2 hình phạt và + 20p tù liên bang - Đối với nhà dân x3 hình phạt + 30p tù liên bang - Đối với Apple Store x3 hình phạt + 30p tù liên bang"],
          phat: "Thời gian cool down cho 1 vụ cướp là 15p tính từ thời gian bị phạt lao động."
        }
      ]
    }

  ]
};
