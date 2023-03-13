var tipuesearch = {"pages": [{'title': 'About', 'text': 'members: \n 41023114 王樟皓 41023126 卓桓琮 \n 倉儲: \xa0 https://github.com/mdecd2023/2a-pj1ag12 \n 網站: \xa0 https://mdecd2023.github.io/2a-pj1ag12 \n', 'tags': '', 'url': 'About.html'}, {'title': 'W3', 'text': 'hw1 請各組寫一個程式判定 2a 哪一組已經完成網頁建置. \n  hw2 Tutorial1-CoppeliaSim 4.3.0 User Manual - CoppeliaSim 4.3.0 使用者手冊  https://mde.tw/pjcopsim/content/bubbleRobTutorial.html  心得, 展示頁面說明各組員所完成項目, 說明該組的專案規劃 \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'hw1', 'text': '\n 請各組寫一個程式判定 2a 哪一組已經完成網頁建置. \n 用Python的requests套件來進行網頁存取，並且查看網頁的回應狀態碼，判斷網頁是否存在。以下是一個可以判斷組別網頁建置狀態的Python程式： import requests \n base_url = "https://github.com/NTUT-2A/" \n # 迭代21個組別 for i in range(1, 22):  # 組別網頁的URL  url = base_url + f"2a-pj1ag{i}" \n # 建立 GET 請求  response = requests.get(url) \n # 判斷回應狀態碼是否為200  if response.status_code == 200:  print(f"2a-pj1ag{i} 已經完成網頁建置")  else:  print(f"2a-pj1ag{i} 尚未完成網頁建置") 程式會先以for迴圈迭代21個組別，然後使用requests.get()函式發送GET請求去查詢每一個組別的網頁狀態。如果回應狀態碼為200，代表網頁存在，組別已完成網頁建置；反之，如果回應狀態碼不是200，代表網頁不存在，組別尚未完成網頁建置。 \n \n \n \n', 'tags': '', 'url': 'hw1.html'}, {'title': 'hw2', 'text': 'Tutorial1-CoppeliaSim 4.3.0 User Manual - CoppeliaSim 4.3.0 使用者手冊  https://mde.tw/pjcopsim/content/bubbleRobTutorial.html   \n 心得, 展示頁面說明各組員所完成項目, 說明該組的專案規劃. \n', 'tags': '', 'url': 'hw2.html'}, {'title': 'tutorial1', 'text': 'bubboleRob ppt報告: Google硬碟 PPT Report \xa0 \n 完成模擬影片: https://youtu.be/iL5Z9Yr515I \n \n stage1 \n 模擬兩球相撞 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 模擬兩球相撞 \n https://youtu.be/WbUQO7bAOyA \n \n stage2 \n 新增bubbleRob並設定 \n 補充說明:0.33秒時 要先設定 Position \xa0 Z軸為0.12 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage3 \n 幫bubbleRob加上感測器 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage4 \n 新增輪子 左輪及右輪 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n atage5 \n 在輪子上加上馬達 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage6 \n 增加小滑輪 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage7 \n 增加graph和障礙物 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage8 \n 設定bubblerob modle模型建構 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage9 \n 新增vision sensor \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage10 \n 加入程式碼 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n FINAL \n 調整障礙物位置 不要讓車子跑出去 就完成了', 'tags': '', 'url': 'tutorial1.html'}, {'title': '目前進度', 'text': '1.網頁已經架設完成 \n 2.完成tutorial1-bubbleRob 的作業 \n 3.專案規劃正在規劃中 \n \n', 'tags': '', 'url': '目前進度.html'}, {'title': '專案規劃', 'text': '開發一款能在 web-based CoppeliaSim 場景中雙方或多方 (human or computer) 對玩的遊戲 (game) 產品 \n 目前的想法: \n 疊方塊:在時間限制內疊更高的方塊堆 \n 在上方架設丟方塊的裝置 \n 在底下放一個接方塊的車子 \n 在有限的時間內誰疊的方塊越高 誰就贏 \n', 'tags': '', 'url': '專案規劃.html'}, {'title': '心得', 'text': '41023126心得: 這學期的課程中有很多的要學習的地方 \n 1.建立倉儲，架設網站 \n 2.在過程中學習英文 \n 3.認識程式語言(python) \n 4.蒐集資料，善用工具 \n 5.如何分工，分配工作 \n 6.解決問題 \n 遇到的問題有 \n 1.不同人更新倉儲時，會發生衝突 \n 解決方法-->利用git pull 指令將遠端的資料拉下來合併 \n 製作bubbleRob的過程中發現英文真的很重要，因為有些部分翻譯過會怪怪的，所以要重複閱讀幾次，才能知道是甚麼意思。 \n 41023114心得: 對於這個bubblerob，我認為他的建構對我們而言算是挺有難度的，由於這次的模型包含的屬性眾多，因此整理重點時，有某些細項需要重複閱讀和翻譯幾次才能理解，且由於它屬於感知機器人，因此還得幫它加入腳本語言，且操作上對於不同空間的黏貼組合，我們仍需要多參閱其他範本，畢竟有時候按圖施工也不一定保證成功。 \n', 'tags': '', 'url': '心得.html'}, {'title': 'Progress', 'text': 'w1:說明課程和評分標準 \n w2:二二八連假 \n w3-monday:講解如何建立靜態網站 \n w3-thusday:補課 \n 分工進度 \n 41023114 建立靜態網站 \n 41023126\xa0更新網頁內容 \n', 'tags': '', 'url': 'Progress.html'}, {'title': '程式note', 'text': 'python 相關資料 \n 參考來源: Python 教學 | STEAM 教育學習網 (oxxostudio.tw) \n', 'tags': '', 'url': '程式note.html'}, {'title': 'Requests 函式庫', 'text': 'requests 函式庫 ( 模組 ) 是相當流行的 Python 外部函式庫，透過 requests 能夠輕鬆抓取網頁的資料，這篇教學會介紹 requests 函式庫的基本用法。 \n https://steam.oxxostudio.tw/category/python/spider/requests.html \n', 'tags': '', 'url': 'Requests 函式庫.html'}, {'title': '重複迴圈 ( for、while )', 'text': '「for 迴圈」的使用的方法為「for 變數 in 可迭代的物件:」，執行之後，for 迴圈會依序將可以迭代的物件取出，賦值給指定的變數 。 \n https://steam.oxxostudio.tw/category/python/basic/loop.html \n', 'tags': '', 'url': '重複迴圈 ( for、while ).html'}, {'title': '補充note', 'text': '', 'tags': '', 'url': '補充note.html'}, {'title': '專案規劃定義', 'text': '專案規劃是一個系統性的過程，它包括了訂定目標、確定所需的資源、分配工作和責任、確定時間表、制定預算、風險評估和解決方案等。以下是一個簡單的專案規劃步驟： \n \n \n 確定目標：確定您要達成的目標是什麼。這可能包括確定任務、時程表、預算、資源、風險等。 \n \n \n 分析問題：分析問題，確定這個專案所需要的資源和限制，包括人力、財務、時間和技術方面的問題。 \n \n \n 制定計畫：制定一個計畫，詳細列出實現目標所需要的步驟，確定哪些工作需要完成以及誰將負責完成這些工作。 \n \n \n 資源分配：確定需要哪些資源以及如何分配這些資源。這可能包括人員、技術和設備等。 \n \n \n 建立時間表：建立一個時間表，確定各項工作和活動的時間表和完成期限。 \n \n \n 制定預算：制定一個預算，確定需要的財務資源和預算限制。 \n \n \n 風險評估：評估可能影響項目成功的風險，確定應對策略和解決方案。 \n \n \n 完成計畫：編制完整的計畫，包括上述所有步驟的詳細細節和時間表。 \n \n \n 經過上述步驟，專案規劃就完成了。一旦您完成了這些步驟，您就可以開始執行計畫，確保您的專案能夠順利進行並達成預期的目標。 \n', 'tags': '', 'url': '專案規劃定義.html'}]};