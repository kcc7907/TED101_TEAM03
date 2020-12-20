let app = new Vue({
    el: '#app',
    data: {
        rp: '',
        formData: {
            product_num: '',
            product_kind: '',
            product_name: '',
            product_price: '',
            product_material: '',
            product_update: '',
            product_discount: ''
        }
    },
    methods: {
        send() {
            console.log(this.formData);
            axios.post('../php/13/productInsert.php', this.formData).then(res => {
                this.rp = res.data;
            });
            $('div.sam_jump').addClass('-opacity-zero');
        }
    },
    mounted() {
        axios.post('../php/13/product.php').then(res => {
            this.rp = res.data;
        })
    },
});

let app3 = new Vue({
    el: '#app3',
    data: {
        rp: '',
        formData: {
            case_num: '',
            case_name: '',
            case_date: '',
            case_type: '',
            case_path: ''
        },
        imgsrc: {
            box_one: '',
            box_two: '',
            box_three: ''
        }

    },
    methods: {
        send() {
            console.log(this.formData);
            axios.post('../php/14/case.php', this.formData).then(res => {
            });
            $('div.jane_jump').addClass('-opacity-zero');
        }
    },
    mounted() {
        const self = this;
        // axios.post('../php/14/conn14.php').then(res => {
        //     console.log(res);
        //     this.rp = res.data;
        // })
        $.ajax({
            url: '../php/14/conn14.php',
            dataType: 'JSON',
            success: function (res) {
                console.log(res.case);
                self.rp = res.case;
            }
        })
    },
});

let app4 = new Vue({
    el: '#app4',
    data: {
        rp: '',
    },
    methods: {
    },
    mounted() {
        const self = this;
        // axios.post('../php/14/conn14.php').then(res => {
        //     console.log(res);
        //     this.rp = res.data;
        // })
        $.ajax({
            url: '../php/14/conn14.php',
            dataType: 'JSON',
            success: function (res) {
                console.log(res.order);
                self.rp = res.order;
            }
        })
    },
});

Vue.component('checkComponent', {
    data() {
        return {
            newImgs: [],
            newImgNames: [],
        };
    },
    props: ['session', 'account', 'name', 'worknum', 'workname', 'concept', 'vote', 'status', 'date', 'frontimg', 'draft', 'draw', 'memid'],
    template: `
            <div class="jh_jump">
        <div class="secondBack">
            <img src="../img/product/icon/Icon-cancel.svg" alt="" class="cancel-icon">
                <form action="" method="">
                    <label for="WK_SESSION">比賽屆數</label>
                    <p id="WK_SESSION">第{{ session }}屆</p>
                    <br>

                        <label for="MEM_ID">會員帳號</label>
                        <p id="MEM_ID">{{ account }}</p>
                        <br>

                            <label for="MEM_NAME">會員姓名</label>
                            <p id="MEM_NAME">{{ name }}</p>
                            <br>

                                <label for="CT_PERSONAL_ID">身分證號碼</label>
                                <input type="text" name="CT_PERSONAL_ID" id="CT_PERSONAL_ID" :value="memid">
                        <br>

                                    <label for="CT_IMG_FRONT">身分證圖片</label>
                                    <label for="newPID" name="file">修改</label>
                                    <div class="uploadImg">
                                        <img :src="frontimg" id="CT_IMG_FRONT" class="file">
                        </div>
                                    <input type="file" name="newPID" id="newPID" @change="goChange1">
                        <br>

                                        <label for="WK_ID">作品編號</label>
                                        <p id="WK_ID">{{ worknum }}</p>
                                        <br>

                                            <label for="WK_NAME">作品名稱</label>
                                            <p id="WK_NAME">{{ workname }}</p>
                                            <br>

                                                <label for="WK_CONCEPT">作品理念</label>
                                                <p id="WK_CONCEPT">{{ concept }}</p>
                                                <br>

                                                    <label for="WK_DRAFT">作品草稿</label>
                                                    <label for="newDraft" name="file">修改</label>
                                                    <div class="uploadImg">
                                                        <img :src="draft" id="WK_DRAFT" class="file">
                        </div>
                                                    <input type="file" name="newDraft" id="newDraft">
                                                        <br>

                                                            <label for="WK_DRAW">作品完稿</label>
                                                            <label for="newDraw" name="file">修改</label>
                                                            <div class="uploadImg">
                                                                <img :src="draw" id="WK_DRAW" class="file">
                        </div>
                                                            <input type="file" name="newDraw" id="newDraw">
                                                                <br>

                                                                    <label for="WK_VOTES">投票數</label>
                                                                    <p id="WK_VOTES">{{ vote }}</p>
                                                                    <br>

                                                                        <label for="WK_STATUS" class="theStatus">作品狀態</label>
                                                                        <select name="newStatus" id="newStatus" class="theStatus">
                                                                            <option value="0" selected disabled>審核狀態</option>

                                                                        </select>
                                                                        <br>

                                                                            <label for="WK_DATE">投稿日期</label>
                                                                            <p id="WK_DATE">{{ date }}</p>
                                                                            <br>
                                                                                <button id="work_submit" type="button">保存</button>
                    </form>
                </div>
            </div>
            `,
    methods: {
        goChange1(e) {
            let self1 = this;
            // let file1 = document.getElementById('newPID').files[0];
            let file1 = e.target.files[0];
            // console.log(file1);
            // console.log(self1.frontimg);
            // self1.newImg[0] = file1.name;
            self1.newImgNames.splice(0, 1, file1.name);
            console.log(self1.newImgNames);

            let readFile1 = new FileReader();
            readFile1.readAsDataURL(file1);
            readFile1.addEventListener('load', function (e) {
                self1.newImgs.splice(0, 1, e.target.result);
                console.log(self1.newImgs);
                // self1.frontimg = e.target.result;
            });

            this.$emit('my-emit', this.newImgs[0]);
        },
    },
});

// <option v-for="status in workStatus" : {{ status }}</option>

let JHApp = new Vue({
    el: '#jhApp',
    data: {
        work: [],
        workStatus: ['審核中', '投稿失敗', '投稿成功'],
        newPID: "",
    },
    methods: {
        checkWork() {
            $('div.jh_jump').addClass('-on');
        },

        emitCount(count) {
            this.work[0].CT_IMG_FRONT = count;
        }
    },
    mounted() {
        const that = this;
        $.ajax({
            type: "POST",
            url: "./contestWorkR.php",
            // data: "data",
            dataType: "json",
            success: function (res) {
                let allWork = [];
                $(res).each((index, value) => {
                    that.work.push(value);
                });
                // console.log(res);
            }
        });
        // console.log(allWork);
    },
});