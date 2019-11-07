import form from '@/mixins/crud.form'

export default {
  mixins: [ form ],
  data () {
    return {
      api: {
        detail: 'ROLE_DETAIL',
        create: 'ROLE_CREATE',
        update: 'ROLE_UPDATE'
      }
    }
  },
  computed: {
    setting () {
      return [
        {
          prop: 'role_name',
          default: '',
          label: '角色名称',
          rule: { required: true, message: '必填', trigger: 'change' },
          render: <el-input vModel={ this.form.model.role_name }/>
        },
        {
          prop: 'role_key',
          default: '',
          label: '角色权限',
          rule: { required: true, message: '必填', trigger: 'change' },
          render: <el-input vModel={ this.form.model.role_key }/>
        },
        {
          prop: 'role_sort',
          default: 0,
          label: '显示顺序',
          rule: { required: true, message: '必填', trigger: 'change' },
          render: <el-input-number min={ 1 } vModel={ this.form.model.role_sort }/>
        },
        {
          prop: 'status',
          default: 1,
          label: '状态',
          rule: { required: true, message: '必填', trigger: 'change' },
          render: <d2-dict-select vModel={ this.form.model.status } name="status" style="width:100px;"/>
        },
        {
          prop: 'role_menu',
          default: '',
          label: '菜单权限',
          rule: { required: true, message: '必填', trigger: 'change' },
          render: <d2-tree vModel={ this.form.model.role_menu } source="MENU_ALL" key-label="menu_name" multiple stringify/>
        },
        {
          prop: 'remark',
          default: '',
          label: '备注',
          render: <el-input vModel={ this.form.model.remark }/>
        }
      ]
    }
  }
}
