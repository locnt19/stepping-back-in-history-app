const DeThi = require('../models/DeThi');


//#region Phần 1
exports.templateSection1 = async (req, res) => {
  const deThi = await DeThi.findOne({ code: 'P01' })
  res.render('admin/section-1.pug', { deThi: deThi })
}

exports.templateSection1Create = async (req, res) => {
  const deThi = await DeThi.findOne({ code: 'P01' })
  res.render('admin/section-1-create.pug', { deThi: deThi })
}

exports.createSection1 = async (req, res) => {
  try {
    const deThiDaTonTai = await DeThi.findOne({ code: req.body.code })
    // lưu nếu chưa tồn tại section-1
    if (deThiDaTonTai === null) {
      const deThiMoi = new DeThi(req.body)
      await deThiMoi.save()
      req.flash('message', 'Tạo thành công')
      res.redirect('/questions/section-1/create')
    }
    else {
      // nếu tồn tại section-1 thì bổ sung câu hỏi
      const deThi = await DeThi.findOne({ code: req.body.code })
      deThi.questions.push(req.body.questions[0])
      await deThi.save()
      // thông báo tạo thành công
      req.flash('message', 'Thêm thành công')
      res.redirect('/questions/section-1/create')
    }
  } catch (error) {
    req.flash('message', error)
    res.render('admin/section-1-create.pug')
  }
}
//#endregion

//#region Phần 2
exports.templateSection2 = async (req, res) => {
  const deThi = await DeThi.findOne({ code: 'P02' })
  res.render('admin/section-2.pug', { deThi: deThi })
}

exports.templateSection2Create = async (req, res) => {
  const deThi = await DeThi.findOne({ code: 'P02' })
  res.render('admin/section-2-create.pug', { deThi: deThi })
}

exports.createSection2 = async (req, res) => {
  try {
    const deThiDaTonTai = await DeThi.findOne({ code: req.body.code })
    // lưu nếu chưa tồn tại section-2
    if (deThiDaTonTai === null) {
      const deThiMoi = new DeThi(req.body)
      await deThiMoi.save()
      req.flash('message', 'Tạo thành công')
      res.redirect('/questions/section-2/create')
    }
    else {
      // nếu tồn tại section-1 thì bổ sung câu hỏi
      const deThi = await DeThi.findOne({ code: req.body.code })
      deThi.questions.push(req.body.questions[0])
      await deThi.save()
      // thông báo tạo thành công
      req.flash('message', 'Thêm thành công')
      res.redirect('/questions/section-2/create')
    }
  } catch (error) {
    req.flash('message', error)
    res.render('admin/section-2-create.pug')
  }
}
//#endregion

//#region Phần 3
exports.templateSection3 = async (req, res) => {
  const deThi = await DeThi.findOne({ code: 'P03' })
  res.render('admin/section-3.pug', { deThi: deThi })
}

exports.templateSection3Create = async (req, res) => {
  const deThi = await DeThi.findOne({ code: 'P03' })
  res.render('admin/section-3-create.pug', { deThi: deThi })
}

exports.createSection3 = async (req, res) => {
  try {
    const deThiDaTonTai = await DeThi.findOne({ code: req.body.code })
    // lưu nếu chưa tồn tại section-3
    if (deThiDaTonTai === null) {
      const deThiMoi = new DeThi(req.body)
      await deThiMoi.save()
      req.flash('message', 'Tạo thành công')
      res.redirect('/questions/section-3/create')
    } else {
      // nếu tồn tại section-3 thì bổ sung câu hỏi
      const deThi = await DeThi.findOne({ code: req.body.code })
      deThi.questions.push(req.body.questions[0])
      await deThi.save()
      // thông báo tạo thành công
      req.flash('message', 'Thêm thành công')
      res.redirect('/questions/section-3/create')
    }
  } catch (error) {
    req.flash('message', error)
    res.render('admin/section-3-create.pug')
  }
}
//#endregion

//#region Phần 4
exports.templateSection4 = async (req, res) => {
  const deThi = await DeThi.findOne({ code: 'P04' })
  res.render('admin/section-4.pug', { deThi: deThi })
}

exports.templateSection4Create = async (req, res) => {
  const deThi = await DeThi.findOne({ code: 'P04' })
  res.render('admin/section-4-create.pug', { deThi: deThi })
}

exports.createSection4 = async (req, res) => {
  try {
    const deThiDaTonTai = await DeThi.findOne({ code: req.body.code })
    // lưu nếu chưa tồn tại section-4
    if (deThiDaTonTai === null) {
      const deThiMoi = new DeThi(req.body)
      await deThiMoi.save()
      req.flash('message', 'Tạo thành công')
      // res.json(deThiMoi)
      res.redirect('/questions/section-4/create')
    } else {
      // nếu tồn tại section-4 thì bổ sung câu hỏi
      const deThi = await DeThi.findOne({ code: req.body.code })
      deThi.questions.push(req.body.questions[0])
      await deThi.save()
      // thông báo tạo thành công
      req.flash('message', 'Thêm thành công')
      // res.json(deThi)
      res.redirect('/questions/section-4/create')
    }
  } catch (error) {
    req.flash('message', error)
    // res.json(error)
    res.render('admin/section-4-create.pug')
  }
}
//#endregion