# 每日一课 - cd

> 在 Linux 系统中，使用 cd 命令切换目录。

## 使用

```bash
cd 文件路径
```

## 扩展知识

### 文件路径

1. 绝对文件路径，以 `/` 作为起始，如 `cd /etc/nginx`
2. 相对文件路径，不以 `/` 起始，如 `cd Documents`

### 特殊字符（用于相对路径中）

1. 单点字符 `.`，表示当前路径，如 `cd ./node_modules`
2. 双点字符 `..`，表示当前目录的上级目录，如 `cd ../node_modules`
3. 波浪号字符 `~`，表示当前用户的 `home` 目录

### pwd

`pwd` 命令可以获取当前目录路径。