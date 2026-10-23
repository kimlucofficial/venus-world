/* ============================================================
   LUẬT VENUS WORLD — ĐÂY LÀ FILE DUY NHẤT CẦN SỬA ĐỂ ĐĂNG LUẬT
   ------------------------------------------------------------
   Mỗi chương:  { id, ten, mo (bỏ được), dieu: [...] }
   Mỗi điều:    { so, t, n, phat (bỏ được) }
     so   : số điều hiện ở cột trái, ví dụ "3"
     t    : tiêu đề rút gọn hiện khi chưa mở
     n    : nội dung, mỗi phần tử là một đoạn
            có thể chèn { ds:["gạch đầu dòng 1","gạch đầu dòng 2"] }
     phat : khung xử phạt, xuống dòng bằng \n

   Thêm chương mới: copy nguyên khối { ... }, dán vào mảng chuong,
   đổi id cho khác các chương đang có. Mục lục tự cập nhật.
   ============================================================ */

var VENUS_LUAT = {

  capNhat: "24.10.2026",

  chuong: [

    /* ---------- Chương I ---------- */
    {
      id  : "c1-quy-dinh-chung",
      ten : "QUY ĐỊNH CHUNG",
      mo  : "Bộ luật thành phố Roleplay — Phiên bản 1.0 · Serious Roleplay",
      dieu: [
        {
          so: "1",
          t : "Mục đích và phạm vi áp dụng",
          n : [
            "1.1. Venus World là thành phố nhập vai theo định hướng Serious Roleplay, nơi mọi công dân phải xây dựng nhân vật, hành động và tương tác dựa trên tình huống thực tế, hợp lý.",
            "1.2. Bộ luật áp dụng cho toàn bộ người chơi, tổ chức, Gang/Gia Tộc, các ban ngành và thành viên Ban Quản Trị khi tham gia hoạt động trong thành phố.",
            "1.3. Mọi công dân có trách nhiệm đọc, hiểu và tuân thủ luật trước khi tham gia.",
            "1.4. Không biết luật không được xem là lý do miễn trừ trách nhiệm.",
            "1.5. Nghiêm cấm lợi dụng sơ hở của luật, cơ chế trò chơi hoặc tình huống RP để trục lợi, gây ảnh hưởng đến cộng đồng.",
            "1.6. Ban Quản Trị có quyền giải quyết những tình huống chưa được quy định cụ thể, dựa trên bằng chứng, nguyên tắc công bằng và tinh thần Roleplay."
          ]
        },
        {
          so: "2",
          t : "Nguyên tắc nhập vai",
          n : [
            "2.1. Mọi hành động phải có nguyên nhân, diễn biến và hậu quả RP hợp lý.",
            "2.2. Người chơi phải coi trọng tính mạng, tài sản và sự an toàn của nhân vật.",
            "2.3. Không được cố tình phá vỡ tình huống RP của người khác để giành lợi thế.",
            "2.4. Không được sử dụng kiến thức ngoài đời hoặc thông tin ngoài nhân vật để tác động đến tình huống IC.",
            "2.5. Người chơi phải duy trì thái độ tôn trọng, hợp tác và văn minh trong mọi hoạt động cộng đồng."
          ]
        }
      ]
    },

    /* ---------- Chương II ---------- */
    {
      id  : "c2-he-thong-xu-phat",
      ten : "HỆ THỐNG XỬ PHẠT",
      dieu: [
        {
          so: "3",
          t : "Khung xử phạt thông thường",
          n : [
            "Các vi phạm thông thường được xử lý dựa trên mức độ, hậu quả và lịch sử vi phạm.",
            "3.1. BQT có quyền tăng hoặc giảm hình phạt khi có tình tiết tăng nặng hoặc giảm nhẹ rõ ràng.",
            "3.2. Cố ý tái phạm, che giấu chứng cứ, lôi kéo người khác vi phạm hoặc gây hậu quả nghiêm trọng là tình tiết tăng nặng.",
            "3.3. Những hành vi gian lận, phá hoại hệ thống hoặc gây ảnh hưởng đặc biệt nghiêm trọng có thể bị BAN vĩnh viễn ngay lần đầu.",
            "3.4. Các trường hợp thuộc nhóm vi phạm đỏ được xử lý theo cơ chế riêng tại Điều 4."
          ],
          phat: "Mức 1 — Nhẹ: Nhắc nhở / Cảnh cáo\nMức 2 — Trung bình: Phạt tù IC 120 phút\nMức 3 — Nặng: Phạt tù IC 360 phút\nMức 4 — Nghiêm trọng: BAN 3–7 ngày\nMức 5 — Đặc biệt nghiêm trọng: BAN vĩnh viễn"
        },
        {
          so: "4",
          t : "Hệ thống sẹo — Vi phạm đỏ",
          n : [
            "4.1. Người chơi vi phạm đỏ sẽ bị cộng một sẹo vào hồ sơ cá nhân.",
            "4.2. Khi thành viên Gang/Gia Tộc vi phạm đỏ, cá nhân chịu hình phạt tương ứng và tập thể nhận một WARNING.",
            "4.3. Gang/Gia Tộc có thể bị cộng một sẹo tập thể nếu:",
            { ds: [
              "Có nhiều thành viên cùng tham gia một hành vi vi phạm đỏ.",
              "Một thành viên cố ý tái phạm sau khi tập thể đã được cảnh báo.",
              "Ban lãnh đạo chỉ đạo, bao che hoặc tổ chức hành vi vi phạm.",
              "Tập thể cố tình lợi dụng số đông để phá hoại môi trường RP."
            ] },
            "4.4. WARNING không tự động tương đương với sẹo tập thể. Việc chuyển thành sẹo phải có quyết định và bằng chứng cụ thể.",
            "4.5. Khi đạt ba sẹo tập thể, Gang/Gia Tộc bị giải thể, thu hồi quyền lợi tổ chức theo quy định thành phố.",
            "4.6. Sẹo được lưu trong hồ sơ xử phạt và không tự động xóa theo thời gian, trừ khi có chính sách ân xá được BQT công bố."
          ],
          phat: "Cá nhân — 1 sẹo: Cảnh cáo\nCá nhân — 2 sẹo: BAN 3 ngày\nCá nhân — 3 sẹo: BAN vĩnh viễn\nGang / Gia Tộc — 3 sẹo tập thể: Thu hồi tư cách hoạt động và khai tử Gang/Gia Tộc"
        },
        {
          so: "5",
          t : "Danh sách vi phạm đỏ",
          n : [
            { ds: [
              "RED-01 — Sử dụng Discord, TeamSpeak hoặc ứng dụng ngoài để giao tiếp IC",
              "RED-02 — Deathmatching (DM/RDM) — Tấn công, giết người không có lý do RP",
              "RED-03 — Car Ramming / Vehicle Deathmatching (CRM/VDM)",
              "RED-04 — Toxic nghiêm trọng, xúc phạm gia đình, phân biệt vùng miền, kích động thù ghét",
              "RED-05 — Camp Killer — Canh xác, canh hồi sinh và giết liên tục",
              "RED-06 — Cố tình phá tình huống RP có tổ chức hoặc lặp lại hành vi phá trải nghiệm nghiêm trọng"
            ] },
            "Hành vi hack, cheat, khai thác bug nghiêm trọng được xử lý theo Điều 23 và có thể BAN vĩnh viễn trực tiếp, không áp dụng tuần tự hệ thống sẹo."
          ]
        }
      ]
    },

    /* ---------- Chương III ---------- */
    {
      id  : "c3-quy-tac-roleplay",
      ten : "QUY TẮC ROLEPLAY",
      dieu: [
        {
          so: "6",
          t : "IC và OOC",
          n : [
            "6.1. IC (In Character): Mọi thông tin, hành động, lời nói và quyết định thuộc về nhân vật trong thành phố.",
            "6.2. OOC (Out of Character): Những thông tin ngoài đời thực hoặc nằm ngoài bối cảnh nhân vật.",
            "6.3. Nghiêm cấm mang chuyện OOC vào IC để đe dọa, trả thù, gây áp lực hoặc giải quyết mâu thuẫn.",
            "6.4. Không được dùng vấn đề IC để công kích, xúc phạm hoặc quấy rối người chơi ngoài đời.",
            "6.5. Không được gọi tên ADMIN, nhắc án phạt, ticket hoặc các vấn đề quản trị trong cuộc hội thoại IC nhằm phá vỡ tình huống."
          ]
        },
        {
          so: "7",
          t : "Metagaming (MG)",
          n : [
            "7.1. Metagaming là hành vi sử dụng thông tin nhân vật không thể biết được để tạo lợi thế trong RP.",
            "7.2. Các hành vi bị cấm bao gồm:",
            { ds: [
              "Xem livestream để xác định vị trí người chơi.",
              "Sử dụng Discord hoặc ứng dụng ngoài để gọi viện trợ IC.",
              "Biết danh tính người đeo mặt nạ chỉ nhờ ID hoặc tên hiển thị.",
              "Dùng thông tin từ người đã chết hoặc bất tỉnh để truy tìm đối phương.",
              "Chuyển thông tin giữa các nhân vật không có liên hệ RP hợp lý."
            ] },
            "7.3. Mọi thông tin dùng để hành động IC phải được tiếp nhận bằng phương thức IC hợp lệ."
          ]
        },
        {
          so: "8",
          t : "Powergaming (PG)",
          n : [
            "8.1. Powergaming là hành vi thực hiện hoặc áp đặt hành động phi thực tế nhằm giành lợi thế.",
            "8.2. Nghiêm cấm:",
            { ds: [
              "Ép người khác phải chấp nhận kết quả RP mà không có cơ hội phản ứng hợp lý.",
              "Thực hiện hành động vượt quá khả năng bình thường của nhân vật.",
              "Sử dụng lỗi vật lý hoặc animation để thoát tình huống.",
              "Cố tình điều khiển phương tiện theo cách phi thực tế để né truy đuổi.",
              "Ép người khác thực hiện hành động OOC như xóa tài khoản, rời server hoặc chuyển tài sản ngoài game."
            ] }
          ]
        },
        {
          so: "9",
          t : "FearRP và NVL",
          n : [
            "9.1. FearRP: Người chơi phải thể hiện sự sợ hãi phù hợp khi nhân vật bị đe dọa nghiêm trọng.",
            "9.2. NVL (Not Valuing Life): Không coi trọng mạng sống nhân vật.",
            "9.3. Khi bị khống chế bằng vũ khí trong điều kiện không có khả năng phản kháng hợp lý, người chơi phải tuân thủ tình huống.",
            "9.4. Nghiêm cấm cố tình lao vào khu vực đấu súng, war hoặc tình huống nguy hiểm khi không có liên quan RP.",
            "9.5. Không được cố ý hy sinh nhân vật để tránh bị bắt giữ, tránh mất tài sản hoặc phá kèo.",
            "9.6. Người chơi được phép tìm cách thoát thân nếu có cơ hội RP hợp lý, không vi phạm nguyên tắc FearRP và không lợi dụng lỗi game."
          ]
        },
        {
          so: "10",
          t : "FailRP và Non-RP",
          n : [
            "10.1. FailRP là hành vi nhập vai không phù hợp với bối cảnh, tình huống hoặc đặc điểm nhân vật.",
            "10.2. Non-RP là hành vi không thực hiện hoặc cố tình phá vỡ các yêu cầu nhập vai.",
            "10.3. Nghiêm cấm sử dụng animation, emote, cõng, bế, vác, ngồi vai hoặc các cơ chế khác để né đạn, xuyên vật thể, làm nghề trái cơ chế hoặc thoát RP.",
            "10.4. Không được cố tình spam âm thanh, animation hoặc hành động để phá trải nghiệm của người khác.",
            "10.5. Người chơi phải phối hợp giải quyết tình huống RP thay vì cố tình trì hoãn, đứng im hoặc từ chối tương tác không có lý do hợp lý."
          ]
        }
      ]
    },

    /* ---------- Chương IV ---------- */
    {
      id  : "c4-sinh-mang-va-chien-dau",
      ten : "SINH MẠNG VÀ CHIẾN ĐẤU",
      dieu: [
        {
          so: "11",
          t : "Deathmatching (DM/RDM)",
          n : [
            "11.1. Nghiêm cấm tấn công hoặc giết người khi chưa có nguyên nhân RP chính đáng.",
            "11.2. Mâu thuẫn phải có quá trình hình thành, tương tác và diễn biến hợp lý trước khi leo thang bạo lực.",
            "11.3. Những lý do như nhìn đểu, va chạm nhẹ, trêu chọc đơn giản hoặc bất đồng OOC không mặc nhiên cho phép sử dụng vũ khí gây chết người.",
            "11.4. Không được cố tình tạo lý do RP giả để hợp thức hóa hành vi DM.",
            "11.5. Hành vi DM thuộc nhóm vi phạm đỏ."
          ]
        },
        {
          so: "12",
          t : "Vehicle Deathmatching và Car Ramming",
          n : [
            "12.1. Cấm sử dụng phương tiện làm vũ khí tấn công người khác khi không có tình huống RP hợp lý.",
            "12.2. Cấm cố tình tông liên tục vào phương tiện hoặc người chơi nhằm phá RP.",
            "12.3. Không được sử dụng xe để chặn, đẩy, nghiền hoặc làm lật xe đối phương bằng hành vi phi thực tế.",
            "12.4. Những hành vi gây va chạm trong tình huống truy đuổi phải tuân theo luật truy đuổi và nguyên tắc RP thực tế.",
            "12.5. CRM/VDM cố ý thuộc nhóm vi phạm đỏ."
          ]
        },
        {
          so: "13",
          t : "New Life Rule (NLR) và Revenge Kill (RK)",
          n : [
            "13.1. Khi nhân vật chết hoàn toàn và hồi sinh, nhân vật không được ghi nhớ những thông tin trực tiếp liên quan đến tình huống dẫn đến cái chết.",
            "13.2. Không được quay lại hiện trường để tiếp tục tham chiến hoặc trả thù.",
            "13.3. Không được sử dụng thông tin từ tình huống đã chết để chỉ điểm, truy bắt hoặc tìm đối phương.",
            "13.4. Khi được EMS cứu sống, người chơi phải nhập vai phù hợp với tình trạng thương tích. Không được lập tức quay lại chiến đấu hoặc trả thù trong cùng tình huống.",
            "13.5. Nghiêm cấm Revenge Kill — giết hoặc tấn công người đã hạ gục mình nhằm trả thù tình huống trước.",
            "13.6. Cấm Camp Killer — canh xác, canh điểm hồi sinh hoặc liên tục hạ gục một người để ngăn họ tiếp tục chơi."
          ]
        },
        {
          so: "14",
          t : "Combat Logging",
          n : [
            "14.1. Cấm cố tình thoát game, chuyển nhân vật hoặc AFK để né tình huống RP.",
            "14.2. Cấm thoát game khi đang bị truy đuổi, bắt giữ, khống chế, cướp hoặc giao tranh.",
            "14.3. Khi mất kết nối ngoài ý muốn, người chơi phải chủ động liên hệ người liên quan hoặc BQT và quay lại tiếp tục tình huống khi có thể.",
            "14.4. Trường hợp mất kết nối nhiều lần bất thường trong các tình huống bất lợi có thể bị kiểm tra.",
            "14.5. Nếu không thể tiếp tục tình huống do lỗi kỹ thuật, BQT sẽ căn cứ bằng chứng để quyết định phương án xử lý công bằng."
          ]
        }
      ]
    },

    /* ---------- Chương V ---------- */
    {
      id  : "c5-luat-toi-pham-va-cuop",
      ten : "LUẬT TỘI PHẠM VÀ CƯỚP",
      dieu: [
        {
          so: "15",
          t : "Quy định về cướp tài sản",
          n : [
            "15.1. Một nhóm tổ chức cướp phải có tối thiểu ba người, trừ các sự kiện hoặc tình huống được BQT cho phép riêng.",
            "15.2. Mọi hành vi cướp phải có mở đầu RP rõ ràng, yêu cầu hợp lý và cơ hội tương tác cho nạn nhân.",
            "15.3. Không được cướp cùng một người quá ba lần trong một ngày.",
            "15.4. Cấm cướp người đang được EMS cấp cứu hoặc đang trong tình huống y tế.",
            "15.5. Cấm lợi dụng lỗi giao dịch, inventory hoặc animation để cưỡng đoạt tài sản.",
            "15.6. Cấm ép người chơi chuyển nhượng tài sản ngoài cơ chế RP cho phép hoặc thực hiện giao dịch bằng tiền thật.",
            "15.7. Sau khi cướp thành công, không được giết nạn nhân chỉ để xóa nhân chứng nếu không có diễn biến RP đặc biệt chính đáng.",
            "15.8. Cấm cố tình cướp người chơi mới liên tục nhằm gây khó khăn hoặc ép họ rời thành phố."
          ]
        },
        {
          so: "16",
          t : "Luật bắt cóc và con tin",
          n : [
            "16.1. Việc bắt cóc phải có mục đích RP hợp lý và không được sử dụng chỉ để quấy rối.",
            "16.2. Cấm sử dụng con tin giả, con tin tự nguyện thông đồng để tạo lợi thế trong các tình huống cần con tin thật.",
            "16.3. Cấm cố tình giết con tin trong quá trình thương lượng. Con tin chết hoặc bất tỉnh do hành vi của bên bắt cóc có thể dẫn đến hủy kèo.",
            "16.4. Cấm bắt cóc một chiều khi đối tượng đang thuộc tình huống RP được bảo vệ hoặc có lý do hợp lệ để từ chối.",
            "16.5. Bên bắt cóc phải tạo điều kiện thương lượng hợp lý, không được đưa ra yêu cầu bất khả thi nhằm cố tình phá kèo.",
            "16.6. Nghiêm cấm sử dụng tình huống con tin để ép người chơi thực hiện hành vi xúc phạm, nhục mạ hoặc vi phạm quy định cộng đồng."
          ]
        }
      ]
    },

    /* ---------- Chương VI ---------- */
    {
      id  : "c6-luat-gang-gia-toc",
      ten : "LUẬT GANG / GIA TỘC",
      dieu: [
        {
          so: "17",
          t : "Tổ chức và trách nhiệm tập thể",
          n : [
            "17.1. Gang/Gia Tộc phải được thành phố công nhận trước khi hoạt động với tư cách tổ chức chính thức.",
            "17.2. Người đứng đầu có trách nhiệm quản lý thành viên và duy trì hoạt động phù hợp với luật thành phố.",
            "17.3. Không được lợi dụng danh nghĩa tổ chức để đe dọa OOC, bắt nạt người chơi mới hoặc phá trải nghiệm cộng đồng.",
            "17.4. Các hoạt động chiến tranh, tranh chấp lãnh thổ hoặc trả thù phải có lý do IC hợp lệ.",
            "17.5. Cấm liên minh OOC để huy động lực lượng hoặc chuyển thông tin chiến đấu.",
            "17.6. Cấm dùng người ngoài Gang/Gia Tộc tham chiến trái với giới hạn số lượng hoặc quy định của kèo.",
            "17.7. Thành viên đã chết hoặc bị loại khỏi tình huống không được quay lại hỗ trợ.",
            "17.8. Gang/Gia Tộc phải chấp hành hệ thống WARNING và sẹo tập thể theo Điều 4."
          ]
        },
        {
          so: "18",
          t : "Quy tắc War và giao tranh",
          n : [
            "18.1. War phải xuất phát từ mâu thuẫn IC có diễn biến rõ ràng.",
            "18.2. Cấm tạo chiến tranh chỉ vì mâu thuẫn OOC hoặc mục đích phá hoại.",
            "18.3. Mọi bên tham chiến phải tuân thủ giới hạn thành viên, vũ khí, khu vực và điều kiện riêng của từng loại kèo.",
            "18.4. Cấm người không liên quan tự ý tham chiến, tiếp tế hoặc hỗ trợ thông tin.",
            "18.5. Cấm sử dụng bug, glitch, vị trí lỗi hoặc phương tiện phi thực tế để tạo lợi thế.",
            "18.6. Khi một bên đã đầu hàng hoặc không còn khả năng phản kháng, bên còn lại không được cố tình kéo dài hành vi bạo lực để làm nhục.",
            "18.7. Không được cố tình kéo kèo vào Safe Zone hoặc lợi dụng khu vực an toàn để né giao tranh.",
            "18.8. Sau khi kết thúc kèo, các bên phải tôn trọng kết quả RP và không được tiếp tục gây chiến bằng lý do OOC."
          ]
        }
      ]
    },

    /* ---------- Chương VII ---------- */
    {
      id  : "c7-khu-vuc-va-ban-nganh",
      ten : "KHU VỰC VÀ BAN NGÀNH",
      dieu: [
        {
          so: "19",
          t : "Hệ thống vùng",
          n : [
            { ds: [
              "Vùng xanh — Safe Zone: Khu vực an toàn tuyệt đối. Cấm cướp, bắt cóc, tấn công, giết người và khởi tạo giao tranh. Cấm chạy vào vùng xanh để né tình huống đang diễn ra.",
              "Vùng vàng — Restricted Zone: Khu vực hạn chế bạo lực. Các hành vi cướp, bắt cóc và giao tranh phải tuân thủ quy định riêng của khu vực và có tình huống RP hợp lệ.",
              "Vùng đỏ — Conflict Zone: Khu vực cho phép giao tranh theo cơ chế thành phố. Không đồng nghĩa với việc được phép DM, sử dụng hack, phá RP hoặc vi phạm các luật khác."
            ] },
            "19.1. Ranh giới các vùng được xác định theo bản đồ hoặc thông báo chính thức.",
            "19.2. Không được lợi dụng ranh giới vùng để tấn công một chiều hoặc né trách nhiệm RP.",
            "19.3. Trường hợp event có luật riêng, BQT phải thông báo trước khi sự kiện diễn ra."
          ]
        },
        {
          so: "20",
          t : "Luật PD / EMS / Ban ngành",
          n : [
            "20.1. Nhân sự các ban ngành phải nhập vai đúng chức trách, nhiệm vụ và quyền hạn được giao.",
            "20.2. Cấm tham nhũng, cấu kết tội phạm, lạm quyền hoặc RP bẩn khi chưa được cho phép theo cơ chế thành phố.",
            "20.3. Nghiêm cấm cố tình lợi dụng quyền hạn công vụ để gây khó khăn, trả thù hoặc phá trải nghiệm người chơi.",
            "20.4. Không được tấn công, bắt cóc hoặc giết PD/EMS đang làm nhiệm vụ nếu không có mục đích RP chính đáng.",
            "20.5. EMS đang thực hiện nhiệm vụ cứu người được bảo vệ khỏi hành vi cướp, quấy rối hoặc tấn công vô lý.",
            "20.6. Những tình huống đặc biệt liên quan đến bắt cóc nhân sự ban ngành hoặc nội dung RP quy mô lớn phải được BQT phê duyệt nếu luật riêng yêu cầu.",
            "20.7. Nhân sự ban ngành vi phạm luật chung vẫn chịu xử phạt như công dân và có thể bị xử lý kỷ luật nội bộ."
          ]
        }
      ]
    },

    /* ---------- Chương VIII ---------- */
    {
      id  : "c8-tai-khoan-va-phan-mem",
      ten : "TÀI KHOẢN VÀ PHẦN MỀM",
      dieu: [
        {
          so: "21",
          t : "Tài khoản và nhân vật",
          n : [
            "21.1. Người chơi phải sử dụng tài khoản hợp lệ, do chính mình quản lý.",
            "21.2. Cấm mua bán, chia sẻ, cho thuê hoặc chuyển nhượng tài khoản.",
            "21.3. Nghiêm cấm giả mạo BQT, PD, EMS hoặc người có chức vụ trong thành phố.",
            "21.4. Tên nhân vật phải phù hợp bối cảnh RP; cấm tên phản cảm, xúc phạm hoặc cố tình gây nhầm lẫn.",
            "21.5. Theo quy định RGI của thành phố, nhân vật phải sử dụng giới tính phù hợp với yêu cầu đăng ký nhân vật do server công bố.",
            "21.6. Người chơi có trách nhiệm bảo vệ thông tin đăng nhập. Việc khôi phục tài khoản phải dựa trên bằng chứng xác minh hợp lệ."
          ]
        },
        {
          so: "22",
          t : "Multi-accounting",
          n : [
            "22.1. Mỗi người chơi chỉ được sử dụng số lượng tài khoản do thành phố cho phép.",
            "22.2. Cấm dùng tài khoản phụ để chuyển tài sản, hỗ trợ nhân vật chính hoặc né án phạt.",
            "22.3. Vi phạm lần đầu: BAN toàn bộ tài khoản 3–7 ngày, xóa dữ liệu tài khoản phụ vi phạm và có thể trừ 50% tài sản tài khoản chính theo quyết định xử lý.",
            "22.4. Tái phạm: BAN vĩnh viễn toàn bộ tài khoản liên quan.",
            "22.5. Nghiêm cấm sử dụng tài khoản người khác để tiếp tục chơi trong thời gian bị BAN."
          ]
        },
        {
          so: "23",
          t : "Hack, Cheat và Bug",
          n : [
            "23.1. Nghiêm cấm mọi phần mềm gian lận, hack, cheat, inject, mod menu hoặc công cụ tạo lợi thế không công bằng.",
            "23.2. Cấm sử dụng macro, script hoặc công cụ tự động hóa trái phép nhằm farm, chiến đấu hoặc vượt qua cơ chế trò chơi.",
            "23.3. Cấm khai thác bug nhân bản tài sản, tiền, vật phẩm hoặc các lỗi ảnh hưởng đến kinh tế thành phố.",
            "23.4. Cấm sử dụng lỗi bản đồ, lỗi animation, lỗi hitbox hoặc lỗi cơ chế để giành lợi thế.",
            "23.5. Khi phát hiện lỗi nghiêm trọng, người chơi phải ngừng khai thác và báo cáo qua ticket.",
            "23.6. Hành vi gian lận hoặc cố tình khai thác bug nghiêm trọng có thể bị BAN vĩnh viễn và thu hồi toàn bộ tài sản phát sinh bất hợp pháp."
          ]
        }
      ]
    },

    /* ---------- Chương IX ---------- */
    {
      id  : "c9-giao-tiep-va-cong-dong",
      ten : "GIAO TIẾP VÀ CỘNG ĐỒNG",
      dieu: [
        {
          so: "24",
          t : "Văn hóa ứng xử",
          n : [
            "24.1. Mọi người chơi phải tôn trọng nhau trong và ngoài thành phố.",
            "24.2. Cấm xúc phạm gia đình, phân biệt vùng miền, tôn giáo, giới tính hoặc các hành vi kích động thù ghét.",
            "24.3. Cấm đe dọa ngoài đời, tiết lộ thông tin cá nhân hoặc tổ chức quấy rối người chơi.",
            "24.4. Cấm phát tán nội dung riêng tư của người khác khi chưa được phép.",
            "24.5. Cấm cố tình khiêu khích, spam, phá voice hoặc gây náo loạn cộng đồng.",
            "24.6. Người chơi phải sử dụng tiếng Việt rõ ràng khi giao tiếp RP, hạn chế cách nói gây hiểu nhầm nghiêm trọng."
          ]
        },
        {
          so: "25",
          t : "Voice Chat",
          n : [
            "25.1. Người chơi phải có micro hoạt động để tham gia các tình huống RP yêu cầu giao tiếp.",
            "25.2. Người mới chưa có micro được tối đa 24 giờ để khắc phục theo quy định thành phố.",
            "25.3. Cấm sử dụng Voicemod hoặc phần mềm giả giọng khi chưa được BQT cho phép.",
            "25.4. Cấm sử dụng âm thanh quá lớn, âm thanh gây khó chịu hoặc cố tình phá voice người khác.",
            "25.5. Cấm dùng phần mềm ngoài để truyền đạt thông tin IC thay cho hệ thống liên lạc trong game."
          ]
        }
      ]
    },

    /* ---------- Chương X ---------- */
    {
      id  : "c10-lam-viec-voi-ban-quan-tri",
      ten : "LÀM VIỆC VỚI BAN QUẢN TRỊ",
      dieu: [
        {
          so: "26",
          t : "Tố cáo và khiếu nại",
          n : [
            "26.1. Người chơi khi tố cáo phải cung cấp bằng chứng rõ ràng như video, ảnh hoặc dữ liệu hợp lệ.",
            "26.2. Bằng chứng phải thể hiện đủ bối cảnh để đánh giá tình huống; video cắt ghép hoặc thiếu diễn biến quan trọng có thể không được chấp nhận.",
            "26.3. Người tố cáo và người bị tố cáo phải giữ thái độ văn minh, hợp tác.",
            "26.4. Cấm gian dối lời khai, chỉnh sửa chứng cứ nhằm thay đổi bản chất sự việc.",
            "26.5. Phòng xử lý chỉ gồm người tố cáo, người bị tố cáo và người có liên quan trực tiếp hoặc được BQT triệu tập.",
            "26.6. Người ngoài tự ý can thiệp có thể bị một sẹo cảnh cáo; tái phạm có thể bị xử lý nặng hơn.",
            "26.7. Cấm phát tán, bóc phốt hoặc đào lại những vụ việc đã được giải quyết nhằm kích động mâu thuẫn.",
            "26.8. Người chơi có quyền yêu cầu xem xét lại án phạt bằng ticket nếu có chứng cứ mới hoặc phát hiện sai sót trong quá trình xử lý."
          ]
        },
        {
          so: "27",
          t : "Trách nhiệm của BQT",
          n : [
            "27.1. BQT phải xem xét tình huống dựa trên chứng cứ và quy định thành phố.",
            "27.2. Không được sử dụng quyền quản trị để thiên vị, trả thù cá nhân hoặc can thiệp trái phép vào tình huống RP.",
            "27.3. Các quyết định xử phạt phải ghi nhận lý do, hình thức xử lý và bằng chứng liên quan trong hồ sơ quản trị.",
            "27.4. Những vụ việc có xung đột lợi ích phải được chuyển cho thành viên BQT khác xem xét khi có thể.",
            "27.5. BQT có thể áp dụng biện pháp tạm thời để ngăn hành vi phá hoại đang diễn ra, sau đó phải kiểm tra và xác nhận hình phạt chính thức."
          ]
        }
      ]
    },

    /* ---------- Chương XI ---------- */
    {
      id  : "c11-quy-dinh-dac-biet",
      ten : "QUY ĐỊNH ĐẶC BIỆT",
      dieu: [
        {
          so: "28",
          t : "Server Restart",
          n : [
            "28.1. Cấm thực hiện hành vi cướp trong vòng 30 phút trước và 30 phút sau thời điểm restart được thông báo.",
            "28.2. Cấm lợi dụng restart để né bắt giữ, tránh mất tài sản hoặc xóa bỏ hậu quả RP.",
            "28.3. Cấm cố tình kéo dài tình huống để hệ thống restart làm gián đoạn kèo.",
            "28.4. Những tình huống chưa hoàn thành trước restart phải được các bên thống nhất tiếp tục hoặc yêu cầu BQT hỗ trợ."
          ]
        },
        {
          so: "29",
          t : "Quy định về nội dung nhạy cảm",
          n : [
            "29.1. Cấm nhập vai trẻ em trong những tình huống bạo lực, tình dục hoặc bóc lột.",
            "29.2. Nội dung RP tình dục (ERP) chỉ được xem xét khi có sự đồng thuận rõ ràng giữa những người trưởng thành và phải tuân thủ quy định nền tảng; khuyến khích không thực hiện trong server.",
            "29.3. Cấm ép buộc người khác tham gia nội dung nhạy cảm.",
            "29.4. Cấm nhập vai với mục đích tuyên truyền cực đoan, kích động thù ghét hoặc xúc phạm cá nhân, cộng đồng.",
            "29.5. Cấm sử dụng RP làm lý do để quấy rối hoặc gây tổn thương người chơi ngoài đời."
          ]
        },
        {
          so: "30",
          t : "Quy định về sự kiện",
          n : [
            "30.1. Những sự kiện như AirDrop, Arena, đua xe và hoạt động do BQT tổ chức phải tuân theo luật sự kiện riêng.",
            "30.2. Không được mang mâu thuẫn IC vào sự kiện OOC nếu sự kiện không cho phép.",
            "30.3. Cấm sử dụng bug, cheat hoặc hành vi phá hoại để giành phần thưởng.",
            "30.4. Người tham gia phải tuân thủ thể thức, giới hạn trang bị và quyết định của trọng tài sự kiện.",
            "30.5. Trường hợp luật sự kiện có quy định đặc thù khác với luật chung, BQT phải thông báo rõ phạm vi ngoại lệ trước khi bắt đầu."
          ]
        }
      ]
    },

    /* ---------- Chương XII ---------- */
    {
      id  : "c12-dieu-khoan-thi-hanh",
      ten : "ĐIỀU KHOẢN THI HÀNH",
      mo  : "Tôn trọng — Công bằng — Văn minh — Nhập vai chân thật",
      dieu: [
        {
          so: "31",
          t : "Hiệu lực và cập nhật",
          n : [
            "31.1. Bộ luật có hiệu lực kể từ thời điểm được Ban Quản Trị Venus World công bố chính thức.",
            "31.2. Mọi thay đổi phải được công bố công khai tại kênh thông báo hoặc kênh luật thành phố.",
            "31.3. Các hành vi vi phạm được xử lý theo phiên bản luật có hiệu lực tại thời điểm xảy ra hành vi, trừ trường hợp chính sách xử lý mới có lợi hơn cho người vi phạm và được BQT chấp thuận.",
            "31.4. Các quy định chuyên ngành như luật PD, EMS, Gang/Gia Tộc, kinh tế, cướp ngân hàng, lãnh thổ và sự kiện được áp dụng bổ sung nhưng không được trái với các nguyên tắc nền tảng của bộ luật này.",
            "Mỗi công dân là một phần của câu chuyện. Mỗi hành động đều có hậu quả. Hãy cùng xây dựng Venus World thành một thành phố Roleplay chuyên nghiệp, nơi trải nghiệm của cộng đồng luôn được đặt lên hàng đầu."
          ]
        }
      ]
    }

  ]
};
