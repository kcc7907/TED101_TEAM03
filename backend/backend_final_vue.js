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
            axios.post('../php/13/productInsert.php', this.formData).then(() => {
                this.getData();
            })
            $('div.sam_jump').addClass('-opacity-zero');
            setTimeout(function () {
                $('div.sam_jump').removeClass('-on -opacity-zero');
            }, 1000);
        },
        getData() {
            axios.post('../php/13/product.php').then(res => {
                this.rp = res.data;
            })
        },
        del(id) {
            let x = confirm('確認是否刪除?');
            if (x) {
                axios.post('../php/13/delProduct.php', { id: this.rp[id].PRD_ID }).then(res => {
                    // Vue.delete(this.rp, id);
                    this.rp.splice(id, 1);
                })
            } else {
                return false
            }
        }
    },
    mounted() {
        this.getData();
    },
});

let app2 = new Vue({
    el: "#app2",
    data: {
        rp: "",
    },
    methods: {
        del(id) {
            let x = confirm('確認是否刪除?');
            if (x) {
                axios.post('../php/20/delMember.php', {id : this.rp[id].MEM_ID}).then(res => {
                    // Vue.delete(this.rp, id);
                    this.rp.splice(id, 1);
                })
            } else {
                return false
            }
        }
    },
    mounted() {
        axios.post("../php/13/kc_getMember.php").then(m => { this.rp = m.data })
    }
});

let app3 = new Vue({
    el: '#app3',
    data: {
        rp: '',
        formData: {
            case_num: '',
            case_region: '',
            case_name: '',
            case_date: '',
            case_type: '',
        },
        imgsrc: {
            box_one: '',
            box_two: '',
            box_three: ''
        }
    },
    methods: {
        send() {
            let img_data = new FormData();
            let that = this;
            if (Boolean($('input#case_path').prop('files')[0])) {
                let newImg = $('input#case_path').prop('files')[0]; // 圖片名稱
                img_data.append('case_num', that.formData.case_num);
                img_data.append('case_region', that.formData.case_region);
                img_data.append('case_name', that.formData.case_name);
                img_data.append('case_date', that.formData.case_date);
                img_data.append('case_type', that.formData.case_type);
                img_data.append('newImg', newImg);
            }
            $.ajax({
                url: "../php/14/case.php",
                type: "POST",
                data: img_data,
                contentType: false,
                cache: false,
                processData: false,
                success: function (res) {
                    that.getData();
                }
            }).then(res => {
                $('div.jane_jump').addClass('-opacity-zero');
                setTimeout(function () {
                    $('div.jane_jump').removeClass('-on -opacity-zero');
                }, 1000);
            })
                ;

        },
        hideButton() {
            //左下方按鈕
            this.formData.case_num = '22';
            this.formData.case_region = '中山';
            this.formData.case_name = '忠泰玉光';
            this.formData.case_date = '20200911';
            $('select#case_type option:nth-child(2)').attr('selected', true);
            this.formData.case_type = $('select#case_type').val();
        },
        getData() {
            const self = this;
            $.ajax({
                url: '../php/14/conn14.php',
                dataType: 'JSON',
                success: function (res) {
                    self.rp = res.case;
                }
            })
        },
        del(id){
            let x = confirm('確認是否刪除?');
            if(x){
                axios.post('../php/14/del14.php', this.rp[id].CASE_ID).then(res => {
                    // Vue.delete(this.rp, id);
                    this.rp.splice(id, 1);
                })
            }else{
                return false
            }
        }
    },
    mounted() {
        this.getData();
    },
});

let app4 = new Vue({
    el: '#app4',
    data: {
        rp: '',
    },
    methods: {
        del(id) {
            let x = confirm('確認是否刪除?');
            if (x) {
                axios.post('../php/14/delorder.php', { id: this.rp[id].ORD_ID }).then(res => {
                    // Vue.delete(this.rp, id);
                    this.rp.splice(id, 1);
                })
            } else {
                return false
            }
        }
    },
    mounted() {
        const self = this;
        $.ajax({
            url: '../php/14/conn14.php',
            dataType: 'JSON',
            success: function (res) {
                self.rp = res.order;
            }
        })
    },
});

Vue.component('checkComponent', {
    data() {
        return {
            newImgUrls: ["", "", ""],
            newImgNames: ["", "", ""],
            workStatus: ['審核中', '投稿失敗', '投稿成功'],
        };
    },
    props: ['session', 'account', 'name', 'worknum', 'workname', 'concept', 'vote', 'status', 'date', 'frontimg', 'draft', 'draw', 'memid', 'i'],
    template: `
            <div class="jh_jump" :data-id=i>
                <div class="secondBack">
                    <img src="../img/product/icon/Icon-cancel.svg" alt="" class="cancel-icon" @click="closeIcon(i)">
                    <form action="" method="">
                        <label for="WK_SESSION">比賽屆數</label>
                        <p id="WK_SESSION">第{{session}}屆</p>
                        <br>

                        <label for="MEM_ID">會員帳號</label>
                        <p id="MEM_ID">{{account}}</p>
                        <br>

                        <label for="MEM_NAME">會員姓名</label>
                        <p id="MEM_NAME">{{name}}</p>
                        <br>

                        <label for="CT_PERSONAL_ID">身分證號碼</label>
                        <p id="CT_PERSONAL_ID">{{memid}}</p>
                        <br>

                        <label for="CT_IMG_FRONT">身分證圖片</label>
                        <label for="newPID" name="file">修改</label>
                        <div class="uploadImg">
                            <img :src="frontimg" id="CT_IMG_FRONT" class="file">
                        </div>
                        <input type="file" name="newPID" id="newPID" @change="goChange1">
                        <br>

                        <label for="WK_ID">作品編號</label>
                        <p id="WK_ID">{{worknum}}</p>
                        <br>

                        <label for="WK_NAME">作品名稱</label>
                        <p id="WK_NAME">{{workname}}</p>
                        <br>

                        <label for="WK_CONCEPT">作品理念</label>
                        <p id="WK_CONCEPT">{{concept}}</p>
                        <br>

                        <label for="WK_DRAFT">作品草稿</label>
                        <label for="newDraft" name="file">修改</label>
                        <div class="uploadImg">
                            <img :src="draft" id="WK_DRAFT" class="file">
                        </div>
                        <input type="file" name="newDraft" id="newDraft"  @change="goChange2">
                        <br>
                        
                        <label for="WK_DRAW">作品完稿</label>
                        <label for="newDraw" name="file">修改</label>
                        <div class="uploadImg">
                            <img :src="draw" id="WK_DRAW" class="file">
                        </div>
                        <input type="file" name="newDraw" id="newDraw"  @change="goChange3">
                        <br>

                        <label for="WK_VOTES">投票數</label>
                        <p id="WK_VOTES">{{vote}}</p>
                        <br>

                        <label for="WK_STATUS" class="theStatus">作品狀態</label>
                        <select name="newStatus" id="newStatus" class="theStatus" @change="goChangeStatus">
                            <option value="0" selected disabled>審核狀態</option>
                            <option v-for="status in workStatus" :value="status">{{status}}</option>
                        </select>
                        <br>

                        <label for="WK_DATE">投稿日期</label>
                        <p id="WK_DATE">{{date}}</p>
                        <br>
                        <button id="work_submit" type="button" @click="updateBtn">保存</button>
                    </form>
                </div>
            </div>
            `,
    methods: {
        goChangeID(e) {
            let theIndex = parseInt(this.i);
            let newID = $(e.target).val().trim();
            this.$emit('new-idnum', theIndex, newID);
        },

        goChange1(e) {
            let self1 = this;
            let file1 = e.target.files[0];
            self1.newImgNames.splice(0, 1, file1.name);

            let readFile1 = new FileReader();
            readFile1.readAsDataURL(file1);
            readFile1.addEventListener('load', function (e) {
                self1.newImgUrls.splice(0, 1, e.target.result);
                self1.$emit('new-pid', self1.newImgUrls[0]);
            });
        },

        goChange2(e) {
            let self2 = this;
            let file2 = e.target.files[0];
            self2.newImgNames.splice(1, 1, file2.name);

            let readFile2 = new FileReader();
            readFile2.readAsDataURL(file2);
            readFile2.addEventListener('load', function (e) {
                self2.newImgUrls.splice(1, 1, e.target.result);
                self2.$emit('new-draft', self2.newImgUrls[1]);
            });
        },

        goChange3(e) {
            let self3 = this;
            let file3 = e.target.files[0];
            self3.newImgNames.splice(2, 1, file3.name);

            let readFile3 = new FileReader();
            readFile3.readAsDataURL(file3);
            readFile3.addEventListener('load', function (e) {
                self3.newImgUrls.splice(2, 1, e.target.result);
                self3.$emit('new-draw', self3.newImgUrls[2]);
            });
        },

        goChangeStatus(e) {
            let theIndex = parseInt(this.i);
            let newstatus = $(e.target).val();
            // console.log(newstatus);
            this.$emit('new-status', theIndex, newstatus);

        },

        closeIcon(index) {
            $(`div.jh_jump`).eq(index).addClass('-opacity-zero');
            setTimeout(function () {
                $(`div.jh_jump`).eq(index).removeClass('-on -opacity-zero');
            }, 1000);
        },

        updateBtn() {
            let theIndex = parseInt(this.i);
            let newpid = $('.jh_jump input#newPID').prop('files')[0];
            let newdraft = $('.jh_jump input#newDraft').prop('files')[0];
            let newdraw = $('.jh_jump input#newDraw').prop('files')[0];
            this.$emit('update-btn', theIndex, newpid, newdraft, newdraw);

        },
    },
});

let JHApp = new Vue({
    el: '#jhApp',
    data: {
        work: [],
        newPID: "",
        temIndex: 0,
        // photos: ['CT_IMG_FRONT', 'WK_DRAFT', 'WK_DRAW'],
    },
    methods: {

        // 點擊審核出現彈窗
        checkWork(i) {
            $(`div.jh_jump`).eq(i).addClass('-on');
        },

        // 修改root.身分證
        changeIDnum(theIndex, newidnum) {
            this.work[theIndex].CT_PERSONAL_ID = newidnum;
        },

        // 修改root.身分證圖
        changePID(newUrl) {
            let temIndex = parseInt($('div.jh_jump.-on').attr('data-id'));
            this.work[temIndex].CT_IMG_FRONT = newUrl;
        },

        // 修改root.草稿
        changeDraft(newUrl) {
            let temIndex = parseInt($('div.jh_jump.-on').attr('data-id'));
            this.work[temIndex].WK_DRAFT = newUrl;
        },

        // 修改root.完稿
        changeDraw(newUrl) {
            let temIndex = parseInt($('div.jh_jump.-on').attr('data-id'));
            this.work[temIndex].WK_DRAW = newUrl;
        },

        // 修改root.狀態
        changeStatus(theIndex, newstatus) {
            this.work[theIndex].WK_STATUS = newstatus;
        },

        // 保存
        updateInfo(index, newpid, newdraft, newdraw) {
            let form_data = new FormData();
            let newPIdNum = this.work[index].CT_PERSONAL_ID; // 身分證號碼
            let newStatus = this.work[index].WK_STATUS; // 狀態
            let WK_ID = this.work[index].WK_ID;
            let MEM_ID = this.work[index].MEM_ID;
            form_data.append('newPIdNum', newPIdNum);
            form_data.append('newStatus', newStatus);
            form_data.append('WK_ID', WK_ID);
            form_data.append('MEM_ID', MEM_ID);

            let that = this;
            if (!Boolean(newpid) == false) { // 身分證圖片
                form_data.append('newFile1', newpid);
                // console.log(newpid);
            } else {
                form_data.append('newFile2', that.work[index].CT_IMG_FRONT);
                // console.log(that.work[index].CT_IMG_FRONT);
            }

            if (!Boolean(newdraft) == false) { // 草稿
                form_data.append('newFile3', newdraft);
                // console.log(newdraft);
            } else {
                form_data.append('newFile4', that.work[index].WK_DRAFT);
                // console.log(that.work[index].WK_DRAFT);
            }

            if (!Boolean(newdraw) == false) { // 完稿
                form_data.append('newFile5', newdraw);
                // console.log(newdraw);
            } else {
                form_data.append('newFile6', that.work[index].WK_DRAW);
                // console.log(that.work[index].WK_DRAW);
            }

            // console.log(form_data);

            $.ajax({
                url: "contestUpdateR.php",
                type: "POST",
                data: form_data,
                contentType: false,
                cache: false,
                processData: false,
                success: function (res) {
                    // console.log(res);
                    $(`div.jh_jump`).eq(index).addClass('-opacity-zero');
                    setTimeout(function () {
                        $(`div.jh_jump`).eq(index).removeClass('-on -opacity-zero');
                    }, 500);
                }
            });

            if (this.work[index].WK_STATUS !== '待收件') {
                $('button#jh_authorityChange2').eq(index).attr('disabled', 'disabled').css({
                    'backgroundColor': 'grey',
                    'color': 'black',
                });
            }
        }

        // 審核判斷
    },
    mounted() {
        const that = this;
        $.ajax({
            type: "POST",
            url: "./contestWorkR.php",
            dataType: "json",
            success: function (res) {
                let allWork = [];
                $(res).each((index, value) => {
                    that.work.push(value);
                });
            }
        });
        // .then(res=>{
        //     $(that.work).each(function(item, val){
        //         if(val.WK_STATUS !== '待收件'){
        //             $('button#jh_authorityChange2').eq(item).attr('disabled','disabled').css({
        //                 'backgroundColor': 'grey',
        //                 'color': 'black',
        //             });
        //         }
        //     });
        // });
    },
    updated() {
        $(this.work).each(function (item, val) {
            if (val.WK_STATUS !== '待收件') {
                $('button#jh_authorityChange2').eq(item).attr('disabled', 'disabled').css({
                    'backgroundColor': 'grey',
                    'color': 'black',
                });
            }
        });
    },
});

let app5 = new Vue({
    el: '#app5',
    data: {
        rp: '',
        formData: {
            product_num: '',
            product_kind: '',
            product_name: '',
            product_price: '',
            product_material: '',
        }
    },
    methods: {
        getData() {
            axios.post('../php/19/qainfo.php').then(res => {
                this.rp = res.data;
            })
        },
        del(id) {
            let x = confirm('確認是否刪除?');
            if (x) {
                axios.post('../php/19/delqa.php', { id: this.rp[id].CTA_ID }).then(res => {
                    // Vue.delete(this.rp, id);
                    this.rp.splice(id, 1);
                })
            } else {
                return false
            }
        }
    },
    mounted() {
        this.getData();
    },
});