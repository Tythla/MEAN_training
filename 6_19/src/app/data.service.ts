import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return [
      { title: 'VA-11 Hall-A: Cyberpunk Bartender Action', content: 'VA-11 HALL-A:Cyberpunk Bartender Action是一款关于waifu，科技及后-反乌托邦生活，以灌醉顾客为宗旨的调酒师模拟游戏。', color: 'Coral' },
      { title: 'The Witcher 3: Wild Hunt', content: '您是利维亚的杰洛特，收钱办事的怪物杀手。您可以在眼前这片怪物横行、饱受战火摧残的土地上尽情探索。您手上的委托？追踪预言之子——希里，一件足以改变世界面貌的活生生的武器。', color: 'aqua' },
      { title: 'Life is Strange', content: 'Life is Strange is an award-winning and critically acclaimed episodic adventure game that allows the player to rewind time and affect the past, present and future.', color: 'Chartreuse' },
      { title: 'Monster Hunter: World', content: '新的生命之地。狩猎, 就是本能! 「Monster Hunter: World」中,玩家可以体验终极的狩猎生活,活用新建构的世界中各种各样的地形与生态环境享受狩猎的惊喜与兴奋。', color: 'yellow' }
    ];
  }
}
