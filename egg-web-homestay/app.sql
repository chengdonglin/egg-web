create table IF NOT EXISTS`user`(
    `id` int not null auto_increment,
    `username` varchar(20) default null comment '用户名',
    `password` varchar(64) default null comment '密码',
    `avatar` text comment '头像',
    `phone` varchar(20) default null comment '电话',
    `sign` varchar(300) default null comment '用户签名',
    `createTime` timestamp  comment '创建时间',
    `updateTime` timestamp  comment '更新时间',
    primary key(`id`)
) engine=InnoDB auto_increment=3 default charset=utf8 comment='用户表';
create table IF NOT EXISTS `house`(
    `id` int not null auto_increment,
    `name` varchar(50) default null comment '房屋名称',
    `info` varchar(150) default null comment '房屋简介',
    `address` varchar(200) default null comment '房屋地址',
    `price` int default null comment '房屋价格',
    `publishTime` timestamp comment '发布时间',
    `cityCode` varchar(10) not null comment '城市编码',
    `showCount` int(5) not null default 0 comment '展示次数',
    `startTime` timestamp comment '开始出租时间',
    `endTime` timestamp comment '出租结束时间',
    primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='房屋表';


create table if NOT EXISTS `imgs`(
     `id` int not null auto_increment,
     `url` varchar(500) default null comment '图片地址',
     `houseId` int not null comment '房屋Id',
     `createTime` timestamp comment '创建时间',
     primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='图片表';

create table IF not EXISTS`comment`(
    `id` int not null auto_increment,
    `userId` int not null comment '用户表id',
    `houseId` int not null comment '房屋id',
    `msg` varchar(500) not NULL default "" comment '评论内容',
    `createTime` timestamp comment '评论时间',
     primary key(`id`)
) engine=InnoDB auto_increment=1 default charset=utf8 comment='评论表';

create table IF not EXISTS `orders`(
    `id` int not null auto_increment,
    `order_number` varchar(20) default null comment '订单编号',
    `userId` int not null comment '用户id',
    `houseId` int not null comment '房屋Id',
    `isPayed` int default 0 comment '是否支付,0-未支付,1-已支护',
    `createTime` timestamp comment '创建时间',
    `updateTime` timestamp  comment '更新时间',
     primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='订单表';