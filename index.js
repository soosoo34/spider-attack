/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 const baseX = parseInt(inputs[0]); // The corner of the map representing your base
 const baseY = parseInt(inputs[1]);
 const heroesPerPlayer = parseInt(readline()); // Always 3
 
 imInTopLeft = function(baseX) {
     if (baseX === 0 ) {
         return true;
     }
 }
 
 class Hereos {
     constructor(health, x , y , id , distanceFromMyBase) {
         this.health = health;
         this.x = x;
         this.y = y;
         this.id = id;
         this.distanceFromMyBase = distanceFromMyBase; 
       }
 }
 class Monster {
     constructor(health, x , y, nearBase , id , threatFor , vx , vy , distanceFromMyBase) {
         this.health = health;
         this.x = x;
         this.y = y;
         this.nearBase = nearBase; 
         this.id = id;
         this.threatFor = threatFor;
         this.vx = vx ;
         this.vy = vy ;
         this.distanceFromMyBase = distanceFromMyBase;  
     }
 }
 
 hereosArray = [];
 monsterArray = [];
 
 const getDistanceFrom = function (x1, y1 , x2 , y2) {
     return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
 };
 
 
 
 
 // game loop
 while (true) {
     for (let i = 0; i < 2; i++) {
         var inputs = readline().split(' ');
         const health = parseInt(inputs[0]); // Each player's base health
         const mana = parseInt(inputs[1]); // Ignore in the first league; Spend ten mana to cast a spell
     }
     const entityCount = parseInt(readline()); // Amount of heros and monsters you can see
     for (let i = 0; i < entityCount; i++) {
         var inputs = readline().split(' ');
         const id = parseInt(inputs[0]); // Unique identifier
         console.error(id)
         const type = parseInt(inputs[1]); // 0=monster, 1=your hero, 2=opponent hero
         const x = parseInt(inputs[2]); // Position of this entity
         const y = parseInt(inputs[3]);
         const shieldLife = parseInt(inputs[4]); // Ignore for this league; Count down until shield spell fades
         const isControlled = parseInt(inputs[5]); // Ignore for this league; Equals 1 when this entity is under a control spell
         const health = parseInt(inputs[6]); // Remaining health of this monster  
         const vx = parseInt(inputs[7]); // Trajectory of this monster
         const vy = parseInt(inputs[8]);
         const nearBase = parseInt(inputs[9]); // 0=monster with no target yet, 1=monster targeting a base
         const threatFor = parseInt(inputs[10]); // Given this monster's trajectory, is it a threat to 1=your base, 2=your opponent's base, 0=neither
 
         // Create Every monster: Si le montre n'est pas trouver on peut le créer 
         if (type === 0 && !monsterArray.find(e => e.id === id)) {
          
            monsterToPush =  new Monster(health , x , y , nearBase , id , threatFor ,vx , vy , getDistanceFrom(x, y ,baseX , baseY).toFixed(0))
            monsterArray.push(monsterToPush)
         }
         
         // Si le monstre existe déja , on recherche sont index , et met à jour sa position et sa vie 
         if (type === 0 && monsterArray.find(e => e.id === id)) {
             monsterArray[monsterArray.findIndex(e => e.id === id )].x = x;
             monsterArray[monsterArray.findIndex(e => e.id === id )].y = y;
             monsterArray[monsterArray.findIndex(e => e.id === id )].health = health;
             monsterArray[monsterArray.findIndex(e => e.id === id )].threatFor = threatFor;
             monsterArray[monsterArray.findIndex(e => e.id === id )].nearBase = nearBase;
             monsterArray[monsterArray.findIndex(e => e.id === id )].id = id;
         }
  
         if (type === 1 && !hereosArray.find(e => e.id === id)) {
             hereosToPush =  new Hereos( health , x , y , id , getDistanceFrom(x, y ,baseX , baseY).toFixed(0))
             hereosArray.push(hereosToPush)
          }
 
          if (type === 1 && hereosArray.find(e => e.id === id)) {
             hereosArray[hereosArray.findIndex(e => e.id === id )].x = x;
             hereosArray[hereosArray.findIndex(e => e.id === id )].y = y;
          }
 
 
     }
     for (let i = 0; i < heroesPerPlayer; i++) {
 
         // Write an action using console.log()
         // To debug: console.error('Debug messages...');
 
        
 
         // In the first league: MOVE <x> <y> | WAIT; In later leagues: | SPELL <spellParams>;
     }
      dangerousMonster = monsterArray.filter(e => e.threatFor == 1);
     
      
         if (dangerousMonster) {
             dangerousMonster.sort( (a , b ) => a.distanceFromMyBase - b.distanceFromMyBase)
         }
         if (monsterArray) {
             monsterArray.sort( (a , b ) => a.distanceFromMyBase - b.distanceFromMyBase)
         }
         if (hereosArray) {
             hereosArray.sort( (a , b ) => a.distanceFromMyBase - b.distanceFromMyBase)
         }
 
 
       //  if (dangerousMonster.length != 0 && dangerousMonster[0].distanceFromMyBase < 6000) {
          //   console.log('MOVE ' + monsterArray[0].x + ' ' + monsterArray[0].y )
          //   console.log('SPELL WIND 8838 4413')
           //  console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
       //  }
 
     if ( dangerousMonster.length == 1 ) {
         console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
         console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
         console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
     }
 
     if ( dangerousMonster.length ==  2) {
         console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
         console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
         console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
         
     }
     if ( dangerousMonster.length >= 3  ) {
         console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
         console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
         console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
     }
     if ( imInTopLeft(baseX) && dangerousMonster.length === 0 && monsterArray.length !== 0 ) {
         console.log('MOVE ' + monsterArray[0].x + ' ' + monsterArray[0].y)
         console.log('MOVE 3945 3100')
         console.log('MOVE 1843 4880')
     } 
     if ( !imInTopLeft(baseX) && dangerousMonster.length === 0 && monsterArray.length !== 0 ) {
         console.log('MOVE 15423 4480')
         console.log('MOVE 13018 7248')
         console.log('MOVE ' + monsterArray[0].x + ' ' + monsterArray[0].y)
     } 
 
    if (dangerousMonster.length != 0 && dangerousMonster[0].distanceFromMyBase > 7000 && getDistanceFrom(hereosArray[1].x , hereosArray[1].y ,dangerousMonster[0].x , dangerousMonster[0].y) < 1800 ) {
        console.log('MOVE ' + monsterArray[0].x + ' ' + monsterArray[0].y)
       console.log('SPELL CONTROL ' + monsterArray[0].id + ' 17589 8683')
       console.log('MOVE ' + dangerousMonster[0].x + ' ' + dangerousMonster[0].y )
     } // Faut refaire les conditions : Envoyer un joueur au millieux , défendre avec deux joueurs uniquements, qui doivent rester beaucoup plus centrer dans la base 
     // Le bonhome au millieux dois sois : aller dans la base enemis et utilisé des spell de vent pour pousser les monstres a l'intérieur 
     // Sois spam de petit monstre avec le controle depuis le millieux 
     // Sois prendre le controle des bonhome ennemis pour les empéchers de de défendre 
     // Retravailler complétement la lisibilité du code 
 
 
     if (imInTopLeft(baseX) && dangerousMonster.length === 0 && monsterArray.length === 0 ) {
         console.log('MOVE 4900 870')
         console.log('MOVE 3945 3100')
         console.log('MOVE 1843 4880')
     }
     
     if (!imInTopLeft(baseX) && dangerousMonster.length === 0 && monsterArray.length === 0 ) {
         console.log('MOVE 15787 4240')
         console.log('MOVE 13585 5881')
         console.log('MOVE 12585 8016')
     }
 
 
   //  console.error(monsterArray[0].distanceFromMyBase)
     for (let i = 0; i < dangerousMonster.length; i++ ) {
         dangerousMonster.splice(i , 1)
    } for (let i = 0; i < monsterArray.length; i++ ) {
     monsterArray.splice(i , 1)
 }
     // TODO VOIR POURQUOI NEARBASE EST TOUJOURS A 0 
 
     
 }
 