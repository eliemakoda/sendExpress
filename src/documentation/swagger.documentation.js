/**
 * @swagger
 * tags:
 *   name: Service
 *   description: Operations related to Services
 */

/**
 * @swagger
 * /api/service:
 *   get:
 *     summary: Get all services
 *     tags: [Service]
 *     responses:
 *       200:
 *         description: List of services
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/service/{id}:
 *   get:
 *     summary: Get service by ID
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Service ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Service details
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/service:
 *   post:
 *     summary: Create a new service
 *     tags: [Service]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Service created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/service/{id}:
 *   put:
 *     summary: Update service by ID
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Service ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Service updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/service/{id}:
 *   delete:
 *     summary: Delete service by ID
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Service ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Service deleted successfully
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: Operations related to Blogs
 */

/**
 * @swagger
 * /api/blog:
 *   get:
 *     summary: Get all blog posts
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: List of blog posts
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/blog/{id}:
 *   get:
 *     summary: Get blog post by ID
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Blog ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blog details
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/blog:
 *   post:
 *     summary: Create a new blog post
 *     tags: [Blog]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *               author:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blog post created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/blog/{id}:
 *   put:
 *     summary: Update blog post by ID
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Blog ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *               author:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Blog post updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/blog/{id}:
 *   delete:
 *     summary: Delete blog post by ID
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Blog ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Operations related to Admins
 */

/**
 * @swagger
 * /api/admin:
 *   get:
 *     summary: Get all admins
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of admins
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/admin/{id}:
 *   get:
 *     summary: Get admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Admin ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Admin details
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/admin:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               adresse:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     summary: Update admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Admin ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               adresse:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     summary: Delete admin by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Admin ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Admin deleted successfully
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * tags:
 *   name: Colis
 *   description: Operations related to Colis
 */

/**
 * @swagger
 * /api/colis:
 *   get:
 *     summary: Get all colis
 *     tags: [Colis]
 *     responses:
 *       200:
 *         description: List of colis
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/colis/{id}:
 *   get:
 *     summary: Get colis by ID
 *     tags: [Colis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Colis ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Colis details
 *       404:
 *         description: Colis not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/colis:
 *   post:
 *     summary: Create a new colis
 *     tags: [Colis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               DateEnvoi:
 *                 type: string
 *                 format: date-time
 *               DescriptionColis:
 *                 type: string
 *               HeureReception:
 *                 type: string
 *                 format: date-time
 *               NomExpediteur:
 *                 type: string
 *               ContactExpediteur:
 *                 type: string
 *               AdresseExpediteur:
 *                 type: string
 *               NomRecepteur:
 *                 type: string
 *               ContactRecepteur:
 *                 type: string
 *               LieuDepart:
 *                 type: string
 *               LieuArrive:
 *                 type: string
 *               PoidColis:
 *                 type: string
 *               PrixColis:
 *                 type: string
 *               MoyenTransport:
 *                 type: string
 *               StatuColis:
 *                 type: string
 *               PositionColis:
 *                 type: string
 *     responses:
 *       201:
 *         description: Colis created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/colis/{id}:
 *   put:
 *     summary: Update colis by ID
 *     tags: [Colis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Colis ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               DateEnvoi:
 *                 type: string
 *               DescriptionColis:
 *                 type: string
 *               HeureReception:
 *                 type: string
 *               NomExpediteur:
 *                 type: string
 *               ContactExpediteur:
 *                 type: string
 *               AdresseExpediteur:
 *                 type: string
 *               NomRecepteur:
 *                 type: string
 *               ContactRecepteur:
 *                 type: string
 *               LieuDepart:
 *                 type: string
 *               LieuArrive:
 *                 type: string
 *               PoidColis:
 *                 type: string
 *               PrixColis:
 *                 type: string
 *               MoyenTransport:
 *                 type: string
 *               StatuColis:
 *                 type: string
 *               PositionColis:
 *                 type: string
 *     responses:
 *       200:
 *         description: Colis updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Colis not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/colis/{id}:
 *   delete:
 *     summary: Delete colis by ID
 *     tags: [Colis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Colis ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Colis deleted successfully
 *       404:
 *         description: Colis not found
 *       500:
 *         description: Internal server error
 */
