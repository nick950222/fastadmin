<?php

namespace app\admin\controller;

use app\common\controller\Backend;

/**
 * 控制台
 *
 * @icon fa fa-dashboard
 * @remark 用于展示当前系统中的统计数据、统计报表及重要实时数据
 */
class Test extends Backend
{

    /**
     * 查看
     */
    protected $model = null;
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('Attachment');
    }

    public function index()
    {


        if ($this->request->isAjax())
        {
            list($where, $sort, $order, $offset, $limit) = $this->buildparams();
            $total = $this->model
                    ->where($where)
                    ->order($sort, $order)
                    ->count();

            $list = $this->model
                    ->where($where)
                    ->order($sort, $order)
                    ->limit($offset, $limit)
                    ->select();
            $cdnurl = preg_replace("/\/(\w+)\.php$/i", '', $this->request->root());
            foreach ($list as $k => &$v)
            {
                $v['fullurl'] = ($v['storage'] == 'local' ? $cdnurl : $this->view->config['upload']['cdnurl']) . $v['url'];
            }
            unset($v);
            $result = array("total" => $total, "rows" => $list);

            return json($result);
        }
        $seventtime = \fast\Date::unixtime('day', -7);
        $paylist = $createlist = [];
        for ($i = 0; $i < 7; $i++)
        {
            $day = date("Y-m-d", $seventtime + ($i * 86400));
            $createlist[$day] = mt_rand(20, 200);
            $paylist[$day] = mt_rand(1, mt_rand(1, $createlist[$day]));
        }
        $this->view->assign([
            'totaluser'          => 35200,
            'totalviews'         => 219390,
            'totalorder'         => 32143,
            'totalorderamount'   => 174800,
            'todayuserlogin'     => 321,
            'todayusersignup'    => 430,
            'todayorder'         => 2324,
            'todayunsettleorder' => 132,
            'sevendnu'           => '80%',
            'sevendau'           => '32%',
            'paylist'            => $paylist,
            'createlist'         => $createlist,
        ]);


        return $this->view->fetch();
    }

}

