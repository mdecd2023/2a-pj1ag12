var tipuesearch = {"pages": [{'title': 'About', 'text': 'members: \n 41023114 王樟皓 41023126 卓桓琮 \n 倉儲: \xa0 https://github.com/mdecd2023/2a-pj1ag12 \n 網站: \xa0 https://mdecd2023.github.io/2a-pj1ag12 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w3', 'text': 'hw1 請各組寫一個程式判定 2a 哪一組已經完成網頁建置. \n  hw2 Tutorial1-CoppeliaSim 4.3.0 User Manual - CoppeliaSim 4.3.0 使用者手冊  https://mde.tw/pjcopsim/content/bubbleRobTutorial.html  心得, 展示頁面說明各組員所完成項目, 說明該組的專案規劃 \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'hw1', 'text': '\n 請各組寫一個程式判定 2a 哪一組已經完成網頁建置. \n 用Python的requests套件來進行網頁存取，並且查看網頁的回應狀態碼，判斷網頁是否存在。以下是一個可以判斷組別網頁建置狀態的Python程式： import requests \n base_url = "https://github.com/NTUT-2A/" \n # 迭代21個組別 for i in range(1, 22):  # 組別網頁的URL  url = base_url + f"2a-pj1ag{i}" \n # 建立 GET 請求  response = requests.get(url) \n # 判斷回應狀態碼是否為200  if response.status_code == 200:  print(f"2a-pj1ag{i} 已經完成網頁建置")  else:  print(f"2a-pj1ag{i} 尚未完成網頁建置") 程式會先以for迴圈迭代21個組別，然後使用requests.get()函式發送GET請求去查詢每一個組別的網頁狀態。如果回應狀態碼為200，代表網頁存在，組別已完成網頁建置；反之，如果回應狀態碼不是200，代表網頁不存在，組別尚未完成網頁建置。 \n \n \n \n', 'tags': '', 'url': 'hw1.html'}, {'title': 'hw2', 'text': 'Tutorial1-CoppeliaSim 4.3.0 User Manual - CoppeliaSim 4.3.0 使用者手冊  https://mde.tw/pjcopsim/content/bubbleRobTutorial.html   \n 心得, 展示頁面說明各組員所完成項目, 說明該組的專案規劃. \n', 'tags': '', 'url': 'hw2.html'}, {'title': 'w4', 'text': 'BubbleRub tutorial 製作結果與心得 presentation (以 Web-based 方式發表): \n 製作結果:完成 心得:在做的過程中，可以學習到如何加入物體並設定參數，過程中學習英文及發現問題並解決問題的能力 \n Tutorial 議題: Why? How? What? (主題為何? 如何協同? 完成內容展示) \n Why? \n 這個網站的主題是學習機器人運動和避障演算法的。讓我們可以學習如何設計和編程一個能夠避開障礙物的機器人，並且通過互動式學習環境來實踐和鞏固所學的知識。 \n How? 在協同的過程上，是由組長分配該完成的部分，由組長操作球體製作，以及組員製作wink、PPT報告，但在只有兩人的隊伍中，還是會有一個人無法解決的部分，所以還是必須兩方 都參與到對方所該完成的部分，畢竟兩個人的目的就是為了更好完成一項任務才叫合作， \n What? \n 這個網站提供了一個學習機器人運動和避障演算法的資源，其主要特點包括： \n 1.學習機器人模擬器和程式碼編輯器，讓我們可以進行實踐和練習 \n 2.練習問題，可以讓我們更進一步鞏固所學的知識和技能。 \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w4-note', 'text': '1.在 CoppeliaSim 中, scene 與 model 有何不同? \n 在CoppeliaSim中，場景（scene）和模型（model）是兩個不同的概念。場景是指由多個模型組成的環境或場景，而模型是指一個單獨的物件或組件。可以將模型添加到場景中，並對它們進行組合和控制。 \n 2.在 CoppeliaSim scene 中, 何謂 clean model? \n 在CoppeliaSim中，clean model是指一個不包含任何不必要物件或組件的模型。這些物件或組件可能會干擾模型的性能或導致不必要的計算開銷。因此，建議在創建模型時始終保持模型的乾淨，只包含必要的物件或組件。 \n 3.如何在 CoppeliaSim scene 中, 如何利用 Lua 以及 Python 建立 primitive type object, 並利用程式設定物件位置? \n 要在CoppeliaSim場景中建立基本類型物件並設定它們的位置，可以使用Lua或Python腳本。首先，需要建立物件，然後使用setObjectPosition（）函數將它們放置在所需的位置。例如，以下是在Lua中建立一個圓柱體並將其放置在（1,2,3）的位置的示例代碼： \n handle=sim.createPureShape(1,16,{0.1,0.1,0.2},0.1) sim.setObjectPosition(handle,-1,{1,2,3}) \n 4.CoppeliaSim .ttt 檔案格式與 .simscene.xml 檔案格式有何不同? \n 在CoppeliaSim中，.ttt文件是二進制文件格式，用於保存整個場景，包括所有物件、組件、腳本等。而.simscene.xml文件是XML文件格式，用於保存場景的部分內容，如物件、組件和它們的位置等。這使得可以更容易地編輯和版本控制場景的部分內容，而不必保存整個場景。 \n', 'tags': '', 'url': 'w4-note.html'}, {'title': 'tutorial1', 'text': 'bubboleRob ppt報告: BubbleRob.pptx \xa0 \xa0 Google硬碟 PPT Report \xa0 \n 完成模擬影片: https://youtu.be/iL5Z9Yr515I \xa0\xa0 \n 完成檔: bubbleRob.ttt \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n', 'tags': '', 'url': 'tutorial1.html'}, {'title': '製作過程', 'text': 'stage1 \n 模擬兩球相撞 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 模擬兩球相撞 \n https://youtu.be/WbUQO7bAOyA \n \n stage2 \n 新增bubbleRob並設定 \n 補充說明:0.33秒時 要先設定 Position \xa0 Z軸為0.12 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage3 \n 幫bubbleRob加上感測器 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage4 \n 新增輪子 左輪及右輪 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n atage5 \n 在輪子上加上馬達 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage6 \n 增加小滑輪 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage7 \n 增加graph和障礙物 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage8 \n 設定bubblerob modle模型建構 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage9 \n 新增vision sensor \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n stage10 \n 加入程式碼 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n FINAL \n 調整障礙物位置 不要讓車子跑出去 就完成了 \n', 'tags': '', 'url': '製作過程.html'}, {'title': '程式', 'text': '\n bubbleRob 程式 \n function sysCall_init()    -- This is executed exactly once, the first time this script is executed  bubbleRobBase=sim.getObject(\'.\') -- this is bubbleRob\'s handle  leftMotor=sim.getObject("./leftMotor") -- Handle of the left motor  rightMotor=sim.getObject("./rightMotor") -- Handle of the right motor  noseSensor=sim.getObject("./sensingNose") -- Handle of the proximity sensor  minMaxSpeed={50*math.pi/180,300*math.pi/180} -- Min and max speeds for each motor  backUntilTime=-1 -- Tells whether bubbleRob is in forward or backward mode  robotCollection=sim.createCollection(0)  sim.addItemToCollection(robotCollection,sim.handle_tree,bubbleRobBase,0)  distanceSegment=sim.addDrawingObject(sim.drawing_lines,4,0,-1,1,{0,1,0})  robotTrace=sim.addDrawingObject(sim.drawing_linestrip+sim.drawing_cyclic,2,0,-1,200,{1,1,0},nil,nil,{1,1,0})  graph=sim.getObject(\'./graph\')  distStream=sim.addGraphStream(graph,\'bubbleRob clearance\',\'m\',0,{1,0,0})  -- Create the custom UI:  xml = \'<ui title="\'..sim.getObjectAlias(bubbleRobBase,1)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[  <hslider minimum="0" maximum="100" on-change="speedChange_callback" id="1"/>  <label text="" style="* {margin-left: 300px;}"/>  </ui>  ]]  ui=simUI.create(xml)  speed=(minMaxSpeed[1]+minMaxSpeed[2])*0.5  simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))   end \n function sysCall_sensing()  local result,distData=sim.checkDistance(robotCollection,sim.handle_all)  if result>0 then  sim.addDrawingObjectItem(distanceSegment,nil)  sim.addDrawingObjectItem(distanceSegment,distData)  sim.setGraphStreamValue(graph,distStream,distData[7])  end  local p=sim.getObjectPosition(bubbleRobBase,sim.handle_world)  sim.addDrawingObjectItem(robotTrace,p) end \n function speedChange_callback(ui,id,newVal)  speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100 end \n function sysCall_actuation()   result=sim.readProximitySensor(noseSensor) -- Read the proximity sensor  -- If we detected something, we set the backward mode:  if (result>0) then backUntilTime=sim.getSimulationTime()+4 end \n if (backUntilTime<sim.getSimulationTime()) then  -- When in forward mode, we simply move forward at the desired speed  sim.setJointTargetVelocity(leftMotor,speed)  sim.setJointTargetVelocity(rightMotor,speed)  else  -- When in backward mode, we simply backup in a curve at reduced speed  sim.setJointTargetVelocity(leftMotor,-speed/2)  sim.setJointTargetVelocity(rightMotor,-speed/8)  end end \n function sysCall_cleanup()   simUI.destroy(ui) end \n Vision senser 程式 \n function sysCall_vision(inData)  simVision.sensorImgToWorkImg(inData.handle)  simVision.edgeDetectionOnWorkImg(inData.handle,0.2)  simVision.workImgToSensorImg(inData.handle) end \n function sysCall_init() end \n', 'tags': '', 'url': '程式.html'}, {'title': '中文版程式', 'text': '還沒全部翻譯完 \n -- 定義函數：當腳本被執行時，僅執行一次 function sysCall_init() \n -- 獲取 bubbleRobBase 的句柄 bubbleRobBase = sim.getObject(\'.\') \n -- 獲取左右電機的句柄 leftMotor = sim.getObject("./leftMotor")  rightMotor = sim.getObject("./rightMotor") \n -- 獲取接近感測器的句柄 noseSensor = sim.getObject("./sensingNose") \n -- 每個電機的最小和最大速度 minMaxSpeed = {50*math.pi/180, 300*math.pi/180} \n -- 告訴程式 bubbleRob 當前是前進還是後退 backUntilTime = -1 \n -- 建立機器人集合 robotCollection = sim.createCollection(0) sim.addItemToCollection(robotCollection, sim.handle_tree, bubbleRobBase, 0) \n -- 建立距離線段的視覺化物件 distanceSegment = sim.addDrawingObject(sim.drawing_lines, 4, 0, -1, 1, {0,1,0}) \n -- 建立機器人軌跡的視覺化物件 robotTrace = sim.addDrawingObject(sim.drawing_linestrip+sim.drawing_cyclic, 2, 0, -1, 200, {1,1,0}, nil, nil, {1,1,0}) \n -- 取得圖形物件 graph = sim.getObject(\'./graph\') \n -- 建立一個名為 bubbleRob clearance 的流並將其添加到圖形物件中 distStream = sim.addGraphStream(graph, \'bubbleRob clearance\', \'m\', 0, {1,0,0}) \n -- 建立自訂 UI 介面 xml = \'<ui title="\'..sim.getObjectAlias(bubbleRobBase,1)..\' speed" closeable="false" resizeable="false" activate="false">\'.. [[  <hslider minimum="0" maximum="100" on-change="speedChange_callback" id="1"/>  <label text="" style="* {margin-left: 300px;}"/> </ui> ]] \n ui = simUI.create(xml) \n -- 計算速度並將其設置為滑塊的初始值 speed = (minMaxSpeed[1]+minMaxSpeed[2])*0.5 simUI.setSliderValue(ui, 1, 100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1])) \n end \n -- 定義函數：當感測器更新時執行的操作 function sysCall_sensing() -- 檢查集合中所有物件之間的距離 local result, distData = sim.checkDistance(robotCollection, sim.handle_all) \n -- 如果有任何物體檢測到，則將檢測到的距離繪製為綠色線段 if result > 0 then  sim.addDrawingObjectItem(distanceSegment, nil)  sim.addDrawingObjectItem(distanceSegment, distData)  sim.setGraphStreamValue(graph, distStream, distData[7]) end \n -- 獲取機器人當前位置，並將其添加到軌跡可視化物件中 local p = sim.getObjectPosition(bubbleRobBase, sim.handle_world) sim.addDrawingObjectItem(robotTrace, p) \n end \n', 'tags': '', 'url': '中文版程式.html'}, {'title': 'lua轉成pythont程式', 'text': 'import sim \n def speedChange_callback(ui, id, newVal):  global speed, minMaxSpeed  speed = minMaxSpeed[1] + (minMaxSpeed[2] - minMaxSpeed[1]) * newVal / 100 \n def sysCall_init():  global bubbleRobBase, leftMotor, rightMotor, noseSensor, minMaxSpeed, backUntilTime  global robotCollection, distanceSegment, robotTrace, graph, distStream, ui, speed \n # This is executed exactly once, the first time this script is executed  bubbleRobBase = sim.getObjectHandle(\'.\')  leftMotor = sim.getObjectHandle(\'./leftMotor\') # Handle of the left motor  rightMotor = sim.getObjectHandle(\'./rightMotor\') # Handle of the right motor  noseSensor = sim.getObjectHandle(\'./sensingNose\') # Handle of the proximity sensor  minMaxSpeed = [50 * math.pi / 180, 300 * math.pi / 180] # Min and max speeds for each motor  backUntilTime = -1 # Tells whether bubbleRob is in forward or backward mode  robotCollection = sim.createCollection(0)  sim.addItemToCollection(robotCollection, sim.handle_tree, bubbleRobBase, 0)  distanceSegment = sim.addDrawingObject(sim.drawing_lines, 4, 0, -1, 1, [0, 1, 0])  robotTrace = sim.addDrawingObject(sim.drawing_linestrip + sim.drawing_cyclic, 2, 0, -1, 200, [1, 1, 0])  graph = sim.getObject(\'./graph\')  distStream = sim.addGraphStream(graph, \'bubbleRob clearance\', \'m\', 0, [1, 0, 0]) \n # Create the custom UI  xml = \'\'\'<ui title="{} speed" closeable="false" resizeable="false" activate="false">  <hslider minimum="0" maximum="100" onchange="speedChange_callback" id="1"/>  <label text="" style="* {{margin-left: 300px;}}"/>  </ui>\'\'\'.format(sim.getObjectAlias(bubbleRobBase, 1))  ui = simUI.create(xml)  speed = (minMaxSpeed[1] + minMaxSpeed[2]) * 0.5  simUI.setSliderValue(ui, 1, 100 * (speed - minMaxSpeed[1]) / (minMaxSpeed[2] - minMaxSpeed[1])) \n def sysCall_sensing():  global robotCollection, distanceSegment, robotTrace, graph, distStream  result, distData = sim.checkDistance(robotCollection, sim.handle_all)  if result > 0:  sim.addDrawingObjectItem(distanceSegment, None)  sim.addDrawingObjectItem(distanceSegment, distData)  sim.setGraphStreamValue(graph, distStream, distData[7])  p = sim.getObjectPosition(bubbleRobBase, -1)  sim.addDrawingObjectItem(robotTrace, p) \n def sysCall_actuation():  global speed, backUntilTime  result = sim.readProximitySensor(noseSensor) # Read the proximity sensor  # If we detected something, we set the backward mode:  if result > 0:  backUntilTime = sim.getSimulationTime() + 4 \n if backUntilTime < sim.getSimulationTime():  # When in forward mode, we simply move forward at the desired speed  sim.setJointTargetVelocity(leftMotor, speed)  sim.setJoint \n \n', 'tags': '', 'url': 'lua轉成pythont程式.html'}, {'title': '目前進度', 'text': '1.網頁已經架設完成 \n 2.完成tutorial1-bubbleRob 的作業 \n 3.專案規劃正在規劃中 \n \n', 'tags': '', 'url': '目前進度.html'}, {'title': '專案規劃', 'text': '開發一款能在 web-based CoppeliaSim 場景中雙方或多方 (human or computer) 對玩的遊戲 (game) 產品 \n 目前的想法: \n 疊方塊:在時間限制內疊更高的方塊堆 \n 在上方架設丟方塊的裝置 \n 在底下放一個接方塊的車子 \n 在有限的時間內誰疊的方塊越高 誰就贏 \n', 'tags': '', 'url': '專案規劃.html'}, {'title': '心得', 'text': '41023126心得: 這學期的課程中有很多的要學習的地方 \n 1.建立倉儲，架設網站 \n 2.在過程中學習英文 \n 3.認識程式語言(python) \n 4.蒐集資料，善用工具 \n 5.如何分工，分配工作 \n 6.解決問題 \n 遇到的問題有 \n 1.不同人更新倉儲時，會發生衝突 \n 解決方法-->利用git pull 指令將遠端的資料拉下來合併 \n 製作bubbleRob的過程中發現英文真的很重要，因為有些部分翻譯過會怪怪的，所以要重複閱讀幾次，才能知道是甚麼意思。 \n 41023114心得: 對於這個bubblerob，我認為他的建構對我們而言算是挺有難度的，由於這次的模型包含的屬性眾多，因此整理重點時，有某些細項需要重複閱讀和翻譯幾次才能理解，且由於它屬於感知機器人，因此還得幫它加入腳本語言，且操作上對於不同空間的黏貼組合，我們仍需要多參閱其他範本，畢竟有時候按圖施工也不一定保證成功。 \n', 'tags': '', 'url': '心得.html'}, {'title': 'Progress', 'text': 'w1:說明課程和評分標準 \n w2:二二八連假 \n w3-monday:講解如何建立靜態網站 \n w3-thusday:補課 \n w4:課堂報告 \n 分工進度 \n 41023114 建立靜態網站 \n 41023126\xa0更新網頁內容 \n', 'tags': '', 'url': 'Progress.html'}, {'title': 'note', 'text': '', 'tags': '', 'url': 'note.html'}, {'title': '程式note', 'text': 'python 相關資料 \n 參考來源: Python 教學 | STEAM 教育學習網 (oxxostudio.tw) \n', 'tags': '', 'url': '程式note.html'}, {'title': 'Requests 函式庫', 'text': 'requests 函式庫 ( 模組 ) 是相當流行的 Python 外部函式庫，透過 requests 能夠輕鬆抓取網頁的資料，這篇教學會介紹 requests 函式庫的基本用法。 \n https://steam.oxxostudio.tw/category/python/spider/requests.html \n', 'tags': '', 'url': 'Requests 函式庫.html'}, {'title': '重複迴圈 ( for、while )', 'text': '「for 迴圈」的使用的方法為「for 變數 in 可迭代的物件:」，執行之後，for 迴圈會依序將可以迭代的物件取出，賦值給指定的變數 。 \n https://steam.oxxostudio.tw/category/python/basic/loop.html \n', 'tags': '', 'url': '重複迴圈 ( for、while ).html'}, {'title': 'Lua程式', 'text': '以下是一些特徵： \n 檔的擴展名通常是.lua 程式的函數定義使用關鍵字function，參數不用括號 變數名稱不需要類型聲明 語句結尾不需要分號 註釋以雙橫線（--）開始，單行或多行註釋都可以 UI的定義使用的是Lua的字串處理功能 以上特徵都是Lua程序的特點。 因此，這段程式可以被確認為是Lua編寫的。 \n', 'tags': '', 'url': 'Lua程式.html'}, {'title': '補充note', 'text': '', 'tags': '', 'url': '補充note.html'}, {'title': '專案規劃定義', 'text': '專案規劃是一個系統性的過程，它包括了訂定目標、確定所需的資源、分配工作和責任、確定時間表、制定預算、風險評估和解決方案等。以下是一個簡單的專案規劃步驟： \n \n \n 確定目標：確定您要達成的目標是什麼。這可能包括確定任務、時程表、預算、資源、風險等。 \n \n \n 分析問題：分析問題，確定這個專案所需要的資源和限制，包括人力、財務、時間和技術方面的問題。 \n \n \n 制定計畫：制定一個計畫，詳細列出實現目標所需要的步驟，確定哪些工作需要完成以及誰將負責完成這些工作。 \n \n \n 資源分配：確定需要哪些資源以及如何分配這些資源。這可能包括人員、技術和設備等。 \n \n \n 建立時間表：建立一個時間表，確定各項工作和活動的時間表和完成期限。 \n \n \n 制定預算：制定一個預算，確定需要的財務資源和預算限制。 \n \n \n 風險評估：評估可能影響項目成功的風險，確定應對策略和解決方案。 \n \n \n 完成計畫：編制完整的計畫，包括上述所有步驟的詳細細節和時間表。 \n \n \n 經過上述步驟，專案規劃就完成了。一旦您完成了這些步驟，您就可以開始執行計畫，確保您的專案能夠順利進行並達成預期的目標。 \n', 'tags': '', 'url': '專案規劃定義.html'}]};