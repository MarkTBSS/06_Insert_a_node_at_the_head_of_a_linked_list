function insertNodeAtHead(head, data) {
    return { data, next: head };
}

// สร้าง Linked List
var head = null; // ให้ Pointer (next) ตัวแรกของข้อมูลเป็น null
head = insertNodeAtHead(head, 321);
console.log(head);
/*  head  |  1   | สมมุติให้ address เป็น 1
    next  | null | 
    data  | 321  |                              */ 
head = insertNodeAtHead(head, 975);
console.log(head);
/*  head  |  2   |  1   |
    next  |  1   | null |
    data  | 975  | 321  |                       */
head = insertNodeAtHead(head, 392);
console.log(head);
/*  head  |  3   |  2   |  1   |
    next  |  2   |  1   | null |
    data  | 392  | 975  | 321  |                */
head = insertNodeAtHead(head, 484);
console.log(head);
/*  head  |  4   |  3   |  2   |  1   |
    next  |  3   |  2   |  1   | null | 
    data  | 484  | 392  | 975  | 321  |         */
head = insertNodeAtHead(head, 383);
console.log(head);
/*  head  |  5   |  4   |  3   |  2   |  1   |
    next  |  4   |  3   |  2   |  1   | null | 
    data  | 383  | 484  | 392  | 975  | 321  |  */
// แสดงผลใน Linked List ทั้งหมด
while (head) { 
    console.log(head.data)
    head = head.next 
}